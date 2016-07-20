# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-07-15 10:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='download',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255)),
                ('desc', models.CharField(default='', max_length=255)),
                ('kind', models.IntegerField(choices=[(0, 'PDF'), (1, 'DOC'), (2, 'EXCEL')], default=0)),
                ('file', models.FileField(default=0, upload_to='downloads/')),
            ],
        ),
        migrations.AlterField(
            model_name='service',
            name='kind',
            field=models.IntegerField(choices=[(0, 'PDF'), (1, 'DOC'), (2, 'EXCEL')], default=0),
        ),
        migrations.AlterField(
            model_name='service',
            name='photo',
            field=models.ImageField(default=0, upload_to='services/'),
        ),
    ]