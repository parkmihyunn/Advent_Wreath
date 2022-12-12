# Generated by Django 4.1.3 on 2022-12-12 13:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wall', '0003_alter_realwreath_orn1_alter_realwreath_orn2_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrnamentList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('src1', models.CharField(default=-1, max_length=50)),
                ('src2', models.CharField(default=-1, max_length=50)),
                ('src3', models.CharField(default=-1, max_length=50)),
                ('src4', models.CharField(default=-1, max_length=50)),
                ('src5', models.CharField(default=-1, max_length=50)),
                ('src6', models.CharField(default=-1, max_length=50)),
                ('src7', models.CharField(default=-1, max_length=50)),
                ('src8', models.CharField(default=-1, max_length=50)),
                ('src9', models.CharField(default=-1, max_length=50)),
                ('src10', models.CharField(default=-1, max_length=50)),
                ('user_id', models.ForeignKey(db_column='user_id', on_delete=django.db.models.deletion.CASCADE, related_name='user_ornament', to=settings.AUTH_USER_MODEL, unique=True)),
            ],
        ),
    ]
