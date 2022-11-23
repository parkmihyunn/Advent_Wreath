from django.db import models

# Create your models here.

class quiz(models.Model):
    question = models.CharField(max_length=200)
    answer = models.CharField(max_length=50)
    def __str__(self):
    	return self.question


class horn(models.Model):
    deco = models.CharField(max_length=200)

class hair(models.Model):
    deco = models.CharField(max_length=200)


class eye(models.Model):
    deco = models.CharField(max_length=200)


class body_color(models.Model):
    deco = models.CharField(max_length=200)


class body_eco(models.Model):
    deco = models.CharField(max_length=200)

