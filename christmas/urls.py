"""christmas URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import include, path
from accounts import views
#from django.urls import re_path as path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('wall.urls'),),
    path('accounts/', include('dj_rest_auth.urls')),
    path('accounts/', include('dj_rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),
    path('accounts/', include('accounts.urls')),
    # path('accounts/kakao/login/', views.kakao_login, name='kakao_login'),
    # path('accounts/kakao/callback/', views.kakao_callback, name='kakao_callback'),
    # path('accounts/kakao/login/finish/', views.KakaoLogin.as_view(), name='kakao_login_todjango'),
    path('rest-auth/kakao/', views.KakaoLogin2.as_view(), name='kakao_login2')
]
