from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r"playable", views.PlayableCharacterViewSet)
router.register(r"non-playable", views.NonPlayableCharacterViewSet)

urlpatterns = [
    path('', include(router.urls))
]
