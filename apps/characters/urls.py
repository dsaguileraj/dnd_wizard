from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r'character', views.CharacterViewSet)
router.register(r'class', views.EntityClassViewSet)
router.register(r'monster', views.MonsterViewSet)
router.register(r'race', views.RaceViewSet)

urlpatterns = [
    path('', include(router.urls))
]
