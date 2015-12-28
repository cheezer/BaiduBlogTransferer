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
    articles = []
    for url in getArticleList():
        s = requests.Session()
        cookies = pyCookieCheat.chrome_cookies(url)
        res = s.get(url, cookies = cookies)
        res.encoding = "utf-8"
        #print res.text
        soup = BeautifulSoup(res.text, 'html.parser')
        content = soup.find("meta", {"name":"description"})["content"]
        title = soup.title.string
        content.replace("&nbsp;", " ")
        articles.append((title, content))
        #writerList.write("title:\n")
        #writerList.write(title.encode("utf-8"))
        #writerList.write(content.encode("utf-8"))
    cPickle.dump(articles, open("articles.obj", "wb"))
    #print title
    #writerList.write(title.encode("utf-8"))

