from rest_framework.routers import DefaultRouter
from .views import CharacterViewSet, EntityClassViewSet, MonsterViewSet, RaceViewSet

router = DefaultRouter()

router.register('character', CharacterViewSet, 'character')
router.register('class', EntityClassViewSet, 'class')
router.register('monster', MonsterViewSet, 'monster')
router.register('race', RaceViewSet, 'race')

urlpatterns = router.urls
