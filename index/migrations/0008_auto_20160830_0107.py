# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-08-29 19:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0007_auto_20160720_2221'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='desc',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
    ]
