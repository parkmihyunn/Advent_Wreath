# Create your models here.
from django.db import models


<<<<<<< HEAD
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
    
    

=======
class deer(models.Model):
    horn = models.CharField(max_length=200)
    hair = models.CharField(max_length=200)
    eye = models.CharField(max_length=200)
    body_color = models.CharField(max_length=200)
    body_deco = models.CharField(max_length=200)
    
>>>>>>> 484da55050583991e0adfa141bae607a9b085fea
class mixDeer(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name="user_deer", on_delete=models.CASCADE, db_column="user_id")
    m_horn = models.CharField(max_length=200)
    m_hair = models.CharField(max_length=200)
    m_eye = models.CharField(max_length=200)
    m_body_color = models.CharField(max_length=200)
    m_body_deco = models.CharField(max_length=200)
<<<<<<< HEAD
    
    
class wreath(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name = "user_wreath", on_delete = models.CASCADE, db_column = "user_id")
    src = models.CharField(max_length=200)
    width = models.CharField(max_length=200)
=======
    def __str__(self):
        return str(str(self.user_id)+"님의 순록")
>>>>>>> 484da55050583991e0adfa141bae607a9b085fea
    
class RealWreath(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name = "user_RealWreath", on_delete = models.CASCADE, db_column = "user_id", unique=True)
    orn1 = models.SmallIntegerField(default=-1)
    orn2 = models.SmallIntegerField(default=-1)
    orn3 = models.SmallIntegerField(default=-1)
    orn4 = models.SmallIntegerField(default=-1)
    orn5 = models.SmallIntegerField(default=-1)
    orn6 = models.SmallIntegerField(default=-1)
    orn7 = models.SmallIntegerField(default=-1)
<<<<<<< HEAD
    

class Sock(models.Model):
    u_id = models.ForeignKey("accounts.User", related_name = "user_sock", on_delete = models.CASCADE, db_column = "u_id", unique=True)
    sock1_name = models.CharField(max_length=200)
    sock1_img = models.CharField(max_length=200)
    sock2_name = models.CharField(max_length=200)
    sock2_img = models.CharField(max_length=200)
    sock3_name = models.CharField(max_length=200)
    sock3_img = models.CharField(max_length=200)
    
    
=======
    def __str__(self):
        return str(str(self.user_id)+"님의 리스")

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
    def __str__(self):
        return str(str(self.user_id)+"님의 오너먼트리스트")

class Sock(models.Model):
    user_id = models.ForeignKey("accounts.User", related_name = "user_sock", on_delete = models.CASCADE, db_column = "u_id", unique=True)
    sock1_name = models.CharField(max_length=200,default=None,blank=True, null=True)
    sock1_img = models.CharField(max_length=200,default=None,blank=True, null=True)
    sock2_name = models.CharField(max_length=200,default=None,blank=True, null=True)
    sock2_img = models.CharField(max_length=200,default=None,blank=True, null=True)
    sock3_name = models.CharField(max_length=200,default=None,blank=True, null=True)
    sock3_img = models.CharField(max_length=200,default=None,blank=True, null=True)

    def __str__(self):
        return str(str(self.user_id)+"님의 소원양말")
>>>>>>> 484da55050583991e0adfa141bae607a9b085fea
