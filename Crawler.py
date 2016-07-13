#-*- coding:utf-8 -*-
__author__ = 'michaelxie'

import urllib
import urllib2
import cookielib
import requests
import pyCookieCheat
from bs4 import BeautifulSoup
import cPickle
import re

def getArticleList():
    contentList = open("wenzhang_full.html", "r").readlines()
    articleList = []
    for content in contentList:
        s = 0
        while True:
            pos = content.find("https://wenzhang.baidu.com/page/view?key", s)
            if pos == -1:
                break
            ending = content.find("\"", pos)
            articleList.append(content[pos : ending])
            s = ending
    return articleList

def access1():
    filename = 'cookie.sqlite'
    cookie = cookielib.LWPCookieJar(filename)
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookie))
    '''postdata = urllib.urlencode({
        'userName':'cheezer94',
        'password':''
    })
    loginUrl = 'https://passport.baidu.com/v2/?login&u=http%3A%2F%2Fwenzhang.baidu.com%2F'
    result = opener.open(loginUrl,postdata)'''
    #cookie.save(ignore_discard=True, ignore_expires=True)
    gradeUrl = 'http://wenzhang.baidu.com/'
    result = opener.open(gradeUrl)
    print result.read()

if __name__ == "__main__":
    output2txt = True

    #url="https://wenzhang.baidu.com/page/view?key=168a2f0785435838-1426607065"
    writerList = open("output.txt", "w")
    #urls = ["https://wenzhang.baidu.com/page/view?key=168a2f0785435838-1426607065"]
    urls = getArticleList()
    articles = []
    for i, url in enumerate(urls):
        # Set up conn and cookies
        s = requests.Session()
        cookies = pyCookieCheat.chrome_cookies(url)
        res = s.get(url, cookies=cookies)
        res.encoding = "utf-8"
        soup = BeautifulSoup(res.text, 'html.parser')

        res2 = s.get(soup.body.iframe["src"], cookies = cookies)
        res2.encoding = "utf-8"
        soup2 = BeautifulSoup(res2.text, "html.parser")

        # Web scraping
        title = soup.title.string[1:-8]
        time_re = re.search(r'\d{4}-\d{2}-\d{2}', soup2.body.find('div', attrs={'class':'time-cang'}).string)
        time = time_re.group(0) if time_re else '0000-00-00'

        content = ""
        content_div = soup2.body.find('div', id='detailArticleContent_ptkaiapt4bxy_baiduscarticle')
        tags = content_div.find_all('p')
        if tags:
            # case 1: newer articles (>2011) use <p> or <p><span> to make new paragraphs
            for tag in tags:
                content += tag.text.replace('\n', '') + '\n'
        else:
            # case 2: older baidu articles use <br> to make new paragraphs
            for br in soup2.find_all('br'):
                br.replace_with('\n')
            content = content_div.text + '\n'

        content.replace("&nbsp;", " ")
        # Appending content images to the end
        for img in content_div.find_all('img'):
            content += img['src'] + '\n'

        # Debugging
        #print i
        print title
        print time + '\n'
        print content
        print '+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n'

        articles.append((title, content, time))

        # Write to text
        if output2txt:
            writerList.write(title.encode("utf-8") + '\n')
            writerList.write(time + '\n\n')
            writerList.write(content.encode("utf-8") + '\n')
            writerList.write('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n')

    # Write to obj
    cPickle.dump(articles, open("articles.obj", "wb"))
    writerList.close()
