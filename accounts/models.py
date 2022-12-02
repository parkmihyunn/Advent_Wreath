from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class User(AbstractBaseUser):
    #username = models.CharField(max_length=100, unique=True)
    uid = models.CharField(blank=False, null=True, unique=True, max_length=100)
    #user_email = models.EmailField(_('email address'), unique=True, null=True)
    name = models.CharField(max_length=100,null=True)
    #gender = models.CharField(max_length=100,null=True)
    USERNAME_FIELD = 'uid'
    #2objects = CustomUserManager()
    
    def __str__(self):
        return str(self.uid)