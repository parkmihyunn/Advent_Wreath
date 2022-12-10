from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

# Create your models here.

class User(AbstractUser):
    u_id = models.CharField(blank=False, primary_key = True, null=False,unique=True, max_length=100)
    username = models.CharField(max_length=100, unique=True)
    jwt = models.CharField(blank=False, null=True, unique=True,max_length=100)
    solve_count = models.SmallIntegerField(default=0, blank=False, null = False)
    nickname = models.CharField(max_length=100, blank=False, null=False, default="undefiend")
    sock_image_url1 = models.CharField(null=True, max_length=1000)
    sock_image_url2 = models.CharField(null=True, max_length=1000)
    sock_image_url3 = models.CharField(null=True, max_length=1000)

    def __str__(self):
        return str(self.username)