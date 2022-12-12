# Create your models here.
from django.db import models


class quiz(models.Model):
    question = models.CharField(max_length=200)
    answer = models.CharField(max_length=50)
    def __str__(self):
    	return self.question
 
class user_A(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name="user_answer", on_delete=models.CASCADE, db_column="user_id")
    answer = models.CharField(max_length = 50)

class deer(models.Model):
    
    horn = models.CharField(max_length=200)
    headdeco = models.CharField(max_length=200)
    eye = models.CharField(max_length=200)
    body = models.CharField(max_length=200)
    bodydeco = models.CharField(max_length=200)
    
    

class mixDeer(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name="user_deer", on_delete=models.CASCADE, db_column="user_id")
    m_horn = models.CharField(max_length=200)
    m_hair = models.CharField(max_length=200)
    m_eye = models.CharField(max_length=200)
    m_body_color = models.CharField(max_length=200)
    m_body_deco = models.CharField(max_length=200)
    
    
class wreath(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name = "user_wreath", on_delete = models.CASCADE, db_column = "user_id")
    src = models.CharField(max_length=200)
    width = models.CharField(max_length=200)
    
class RealWreath(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name = "user_RealWreath", on_delete = models.CASCADE, db_column = "user_id", unique=True)
    orn1 = models.SmallIntegerField(default=-1)
    orn2 = models.SmallIntegerField(default=-1)
    orn3 = models.SmallIntegerField(default=-1)
    orn4 = models.SmallIntegerField(default=-1)
    orn5 = models.SmallIntegerField(default=-1)
    orn6 = models.SmallIntegerField(default=-1)
    orn7 = models.SmallIntegerField(default=-1)
    

class Sock(models.Model):
    u_id = models.ForeignKey("accounts.User", related_name = "user_sock", on_delete = models.CASCADE, db_column = "u_id", unique=True)
    sock1_name = models.CharField(max_length=200)
    sock1_img = models.CharField(max_length=200)
    sock2_name = models.CharField(max_length=200)
    sock2_img = models.CharField(max_length=200)
    sock3_name = models.CharField(max_length=200)
    sock3_img = models.CharField(max_length=200)
    
    