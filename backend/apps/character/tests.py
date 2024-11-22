from django.contrib.auth.models import User
from django.test import TestCase
from apps.character.models import NonPlayableCharacter, PlayableCharacter


class PlayableCharacterTest(TestCase):
    def setUp(self) -> None:
        self.user_data = {
            'username': 'test_user',
            'password': '12345',
            'email': 'testuser@example.com',
        }
        self.user = User.objects.create_user(**self.user_data)

        self.pc_data = {
            'player': self.user,
            'name': 'PC Test',
        }
        self.pc = PlayableCharacter(**self.pc_data)
        self.pc.save()

    def test_create_pc(self) -> None:
        """
        Test default values and properties.
        """
        new_user_data = self.user_data.copy()
        new_user_data["username"] = "test_user1"
        user = User.objects.create_user(**new_user_data)

        new_pc_data = self.pc_data.copy()
        new_pc_data['player'] = user
        new_pc_data['name'] = 'Jhon Doe'
        pc = PlayableCharacter(**new_pc_data)
        pc.save()

        # Fields
        self.assertEqual(pc.as_str, 10)
        self.assertEqual(pc.as_dex, 10)
        self.assertEqual(pc.as_con, 10)
        self.assertEqual(pc.as_int, 10)
        self.assertEqual(pc.as_wis, 10)
        self.assertEqual(pc.as_cha, 10)
        self.assertEqual(pc.experience, 0)
        self.assertEqual(pc.hit_points, 10)

        # Properties
        self.assertEqual(pc.mod_str, 0)
        self.assertEqual(pc.mod_dex, 0)
        self.assertEqual(pc.mod_con, 0)
        self.assertEqual(pc.mod_int, 0)
        self.assertEqual(pc.mod_wis, 0)
        self.assertEqual(pc.mod_cha, 0)
        self.assertEqual(pc.proficiency_bonus, 2)

    def test_update_pc(self) -> None:
        """
        Test property when updating a field.
        """
        self.pc.as_cha = 30
        self.pc.save()
        self.assertEqual(self.pc.mod_cha, 10)

    def test_delete_pc(self) -> None:
        """
        Test delete a register.
        """
        self.pc.delete()
        self.assertEqual(PlayableCharacter.objects.count(), 0)


class NonPlayableCharacterTest(TestCase):
    def setUp(self) -> None:
        self.npc_data = {'name': 'NnPC Test', }
        self.npc = NonPlayableCharacter(**self.npc_data)
        self.npc.save()

    def test_create_npc(self) -> None:
        """
        Test default values and properties.
        """
        new_npc_data = self.npc_data.copy()
        new_npc_data['name'] = 'Jhon Doe'
        npc = NonPlayableCharacter(**new_npc_data)
        npc.save()

        # Fields
        self.assertEqual(npc.as_str, 10)
        self.assertEqual(npc.as_dex, 10)
        self.assertEqual(npc.as_con, 10)
        self.assertEqual(npc.as_int, 10)
        self.assertEqual(npc.as_wis, 10)
        self.assertEqual(npc.as_cha, 10)
        self.assertEqual(npc.challenge, 1)
        self.assertEqual(npc.hit_points, 10)

        # Properties
        self.assertEqual(npc.mod_str, 0)
        self.assertEqual(npc.mod_dex, 0)
        self.assertEqual(npc.mod_con, 0)
        self.assertEqual(npc.mod_int, 0)
        self.assertEqual(npc.mod_wis, 0)
        self.assertEqual(npc.mod_cha, 0)
        self.assertEqual(npc.proficiency_bonus, 2)

    def test_update_npc(self) -> None:
        """
        Test property when updating a field.
        """
        self.npc.as_cha = 30
        self.npc.save()
        self.assertEqual(self.npc.mod_cha, 10)

    def test_delete_npc(self) -> None:
        """
        Test delete a register.
        """
        self.npc.delete()
        self.assertEqual(NonPlayableCharacter.objects.count(), 0)
