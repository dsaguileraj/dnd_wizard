from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r'match', views.MatchViewSet)
router.register(r'match_player', views.MatchPlayerViewSet)

urlpatterns = [
    path('', include(router.urls))
]
