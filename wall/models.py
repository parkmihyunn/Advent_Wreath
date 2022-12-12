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
    hair = models.CharField(max_length=200)
    eye = models.CharField(max_length=200)
    body_color = models.CharField(max_length=200)
    body_deco = models.CharField(max_length=200)
    
    

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

class OrnamentList(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name = "user_ornament", on_delete = models.CASCADE, db_column = "user_id", unique=True)
    src1 = models.CharField(max_length = 50,default=-1)
    src2 = models.CharField(max_length = 50,default=-1)
    src3 = models.CharField(max_length = 50,default=-1)
    src4 = models.CharField(max_length = 50,default=-1)
    src5 = models.CharField(max_length = 50,default=-1)
    src6 = models.CharField(max_length = 50,default=-1)
    src7 = models.CharField(max_length = 50,default=-1)
    src8 = models.CharField(max_length = 50,default=-1)
    src9 = models.CharField(max_length = 50,default=-1)
    src10 = models.CharField(max_length = 50,default=-1)