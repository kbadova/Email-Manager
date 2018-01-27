"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from .apis import MessagesList, LoginApi, CoursesListApi, MessageRetrieve

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^messages/(?P<pk>[\w-]+)/$', MessageRetrieve.as_view()),
    url(r'^messages/$', MessagesList.as_view()),
    url(r'^courses/$', CoursesListApi.as_view()),
    url(r'^login/$', LoginApi.as_view())
]
