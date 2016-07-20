from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.service)
admin.site.register(models.download)
admin.site.register(models.notice)
admin.site.register(models.client)
admin.site.register(models.associate)
admin.site.register(models.query)