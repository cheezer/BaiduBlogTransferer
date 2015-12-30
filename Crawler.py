#-*- coding:utf-8 -*-
__author__ = 'michaelxie'

import urllib
import urllib2
import cookielib
import requests
import pyCookieCheat
from bs4 import BeautifulSoup
import cPickle

def getArticleList():
    contentList = open("wenzhang_full.html", "r").readlines()
    articleList = []
    for content in contentList:
        s = 0
        while True:
            pos = content.find("http://wenzhang.baidu.com/page/view?key", s)
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
    #url="http://wenzhang.baidu.com/page/view?key=168a2f0785435838-1426607065"
    writerList = open("output.txt", "w")
    #urls = ["http://wenzhang.baidu.com/page/view?key=168a2f0785435838-1426607065"]
    urls = getArticleList()
    articles = []
    for url in urls:
        s = requests.Session()
        cookies = pyCookieCheat.chrome_cookies(url)
        res = s.get(url, cookies=cookies)
        #print res.raw.read(100000).decode("ISO-8859-1").encode("utf-8")
        #print res.encoding
        res.encoding = "utf-8"
        soup = BeautifulSoup(res.text, 'html.parser')
        #print soup.prettify()
        res2 = s.get(soup.body.iframe["src"], cookies = cookies)
        res2.encoding = "utf-8"
        soup2 = BeautifulSoup(res2.text, "html.parser")
        #print soup2.prettify()
        tags = soup2.body.div.find_all("p")
        content = ""
        for tag in tags:
            content = content + tag.text + "\n"
        #content = "\n".join().replace("<p>", "").replace("</p>", "")
        print content
        pos = soup2.text.rfind(u"收藏于")
        time = soup2.text[pos + 4: pos + 14]
        print time
        title = soup.title.string
        content.replace("&nbsp;", " ")
        articles.append((title, content, time))
        #writerList.write("title:\n")
        #writerList.write(title.encode("utf-8"))
        #writerList.write(content.encode("utf-8"))
    cPickle.dump(articles, open("articles.obj", "wb"))
    #print title
    #writerList.write(title.encode("utf-8"))

