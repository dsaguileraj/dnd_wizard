from rest_framework.routers import DefaultRouter
from .views import MatchViewSet, MatchPlayerViewSet

router = DefaultRouter()

router.register('match', MatchViewSet, 'match')
router.register('match_player', MatchPlayerViewSet, 'match_player')

urlpatterns = router.urls
