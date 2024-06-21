from django.contrib import admin
from . import models

admin.site.register(models.PlayableCharacter)
admin.site.register(models.NonPlayableCharacter)
