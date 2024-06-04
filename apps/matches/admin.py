from django.contrib import admin
from . import models

admin.site.register(models.Match)
admin.site.register(models.MatchPlayer)
