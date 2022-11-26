from django.db import models

# Create your models here.

class quiz(models.Model):
    question = models.CharField(max_length=200)
    answer = models.CharField(max_length=50)
    def __str__(self):
    	return self.question
 
class user_A(models.Model):
    answer = models.CharField(max_length = 50)

class deer(models.Model):
    horn = models.CharField(max_length=200)
    hair = models.CharField(max_length=200)
    eye = models.CharField(max_length=200)
    body_color = models.CharField(max_length=200)
    body_deco = models.CharField(max_length=200)
    
    

class mixDeer(models.Model):
    m_horn = models.CharField(max_length=200)
    m_hair = models.CharField(max_length=200)
    m_eye = models.CharField(max_length=200)
    m_body_color = models.CharField(max_length=200)
    m_body_deco = models.CharField(max_length=200)
    