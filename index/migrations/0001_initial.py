# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-07-13 20:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255)),
                ('desc', models.CharField(default='', max_length=255)),
                ('kind', models.IntegerField(choices=[('HR', 0), ('IT', 1), ('FINANCE', 2)], default=0)),
                ('photo', models.ImageField(default=0, upload_to='services')),
            ],
        ),
    ]