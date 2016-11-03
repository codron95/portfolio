from django.db import models

service_type=(
	(0,'HR'),
	(1,'IT'),
	(2,'FINANCE'),
	)

doc_type=(
	(0,'PDF'),
	(1,'DOC'),
	(2,'EXCEL'),
	)

# Create your models here.
class service(models.Model):
	name=models.CharField(max_length=255,default="")
	desc=models.CharField(max_length=255,default="",blank=True)
	kind=models.IntegerField(choices=service_type,default=0)
	photo=models.ImageField(upload_to='services/',default=0)

	def __str__(self):
		return self.name

class download(models.Model):
	name=models.CharField(max_length=255,default="")
	desc=models.CharField(max_length=255,default="")
	kind=models.IntegerField(choices=doc_type,default=0)
	file=models.FileField(upload_to='downloads/',default=0)

	def __str__(self):
		return self.name

class notice(models.Model):
	head=models.CharField(max_length=255,default="")
	content=models.TextField(default="")
	url=models.CharField(max_length=255,default="0",help_text="0 for no Url")

	def __str__(self):
		return self.head


class client(models.Model):
	name=models.CharField(max_length=40,default="")
	color=models.CharField(max_length=7,default="")
	logo=models.ImageField(upload_to='clients/',default=0)
	url=models.CharField(max_length=255,default="0",help_text="0 for No Url")

	def __str__(self):
		return self.name

class associate(models.Model):
	name=models.CharField(max_length=40,default="")
	desig=models.CharField(max_length=40,default="")
	logo=models.ImageField(upload_to='assocs/',default=0)

	def __str__(self):
		return self.name

class query(models.Model):
	name=models.CharField(max_length=40,default="")
	email=models.CharField(max_length=40,default="")
	subject=models.CharField(max_length=255,default="")
	service=models.CharField(max_length=40,default="")
	query=models.TextField(default="")

	def __str__(self):
		return self.name