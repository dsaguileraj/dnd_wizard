# Generated by Django 5.0.4 on 2024-07-08 01:58

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('actions', '0001_initial'),
        ('rules', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Background',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('armor_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('language_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('skill_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('tool_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('weapon_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('str_st', models.BooleanField(default=False)),
                ('dex_st', models.BooleanField(default=False)),
                ('con_st', models.BooleanField(default=False)),
                ('int_st', models.BooleanField(default=False)),
                ('wis_st', models.BooleanField(default=False)),
                ('cha_st', models.BooleanField(default=False)),
                ('armor_list', models.ManyToManyField(blank=True, to='actions.armor')),
                ('features', models.ManyToManyField(blank=True, to='rules.feature')),
                ('language_list', models.ManyToManyField(blank=True, to='rules.language')),
                ('skill_list', models.ManyToManyField(blank=True, to='rules.skill')),
                ('tool_list', models.ManyToManyField(blank=True, to='actions.tool')),
                ('weapon_list', models.ManyToManyField(blank=True, to='actions.weapon')),
            ],
            options={
                'ordering': ['name'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Bond',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(unique=True)),
                ('background', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='traits.background')),
            ],
            options={
                'ordering': ['background', 'description'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='EntityClass',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('armor_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('language_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('skill_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('tool_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('weapon_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('str_st', models.BooleanField(default=False)),
                ('dex_st', models.BooleanField(default=False)),
                ('con_st', models.BooleanField(default=False)),
                ('int_st', models.BooleanField(default=False)),
                ('wis_st', models.BooleanField(default=False)),
                ('cha_st', models.BooleanField(default=False)),
                ('hit_dice', models.IntegerField(choices=[(4, 'D4'), (6, 'D6'), (8, 'D8'), (10, 'D10'), (12, 'D12'), (20, 'D20')], default=4)),
                ('innate_spellcaster', models.BooleanField(default=False)),
                ('ability', models.CharField(choices=[('STR', 'STR'), ('DEX', 'DEX'), ('CON', 'CON'), ('INT', 'INT'), ('WIS', 'WIS'), ('CHA', 'CHA')], default=None, max_length=3, null=True)),
                ('armor_list', models.ManyToManyField(blank=True, to='actions.armor')),
                ('language_list', models.ManyToManyField(blank=True, to='rules.language')),
                ('skill_list', models.ManyToManyField(blank=True, to='rules.skill')),
                ('spell_list', models.ManyToManyField(blank=True, to='actions.spell')),
                ('tool_list', models.ManyToManyField(blank=True, to='actions.tool')),
                ('weapon_list', models.ManyToManyField(blank=True, to='actions.weapon')),
            ],
            options={
                'ordering': ['name'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Flaw',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(unique=True)),
                ('background', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='traits.background')),
            ],
            options={
                'ordering': ['background', 'description'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Ideal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(unique=True)),
                ('background', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='traits.background')),
            ],
            options={
                'ordering': ['background', 'description'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Personality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(unique=True)),
                ('background', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='traits.background')),
            ],
            options={
                'ordering': ['background', 'description'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Race',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('armor_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('language_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('skill_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('tool_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('weapon_choices', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('str_st', models.BooleanField(default=False)),
                ('dex_st', models.BooleanField(default=False)),
                ('con_st', models.BooleanField(default=False)),
                ('int_st', models.BooleanField(default=False)),
                ('wis_st', models.BooleanField(default=False)),
                ('cha_st', models.BooleanField(default=False)),
                ('aligment', models.CharField(choices=[('LG', 'Lawfull Good'), ('LN', 'Lawfull Neutral'), ('LE', 'Lawfull Evil'), ('NG', 'Neutral Good'), ('NN', 'Neutral Neutral'), ('NE', 'Neutral Evil'), ('CG', 'Choatic Good'), ('CN', 'Choatic Neutral'), ('CE', 'Choatic Evil')], default=None, max_length=2, null=True)),
                ('is_playable', models.BooleanField(default=False)),
                ('str_increase', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(-5)])),
                ('dex_increase', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(-5)])),
                ('con_increase', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(-5)])),
                ('int_increase', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(-5)])),
                ('wis_increase', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(-5)])),
                ('cha_increase', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(-5)])),
                ('size', models.CharField(choices=[('XS', 'XS'), ('S', 'S'), ('M', 'M'), ('L', 'L'), ('XL', 'XL'), ('XXL', 'XXL')], default='M', max_length=3)),
                ('has_nature_armor', models.BooleanField(default=False)),
                ('nature_armor', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('burrow', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('climb', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('fly', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('swim', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('walk', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('innate_spellcaster', models.BooleanField(default=False)),
                ('ability', models.CharField(choices=[('STR', 'STR'), ('DEX', 'DEX'), ('CON', 'CON'), ('INT', 'INT'), ('WIS', 'WIS'), ('CHA', 'CHA')], default=None, max_length=3, null=True)),
                ('known_spells', models.IntegerField(default=None, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('armor_list', models.ManyToManyField(blank=True, to='actions.armor')),
                ('condition_immunity', models.ManyToManyField(blank=True, related_name='condition_immunity_by_race', to='rules.condition')),
                ('creature_type', models.ManyToManyField(blank=True, to='rules.creaturetype')),
                ('damage_immunity', models.ManyToManyField(blank=True, related_name='damage_immunity_by_race', to='rules.damagetype')),
                ('damage_resistance', models.ManyToManyField(blank=True, related_name='damage_resistance_by_race', to='rules.damagetype')),
                ('damage_vulnerability', models.ManyToManyField(blank=True, related_name='damage_vulnerability_by_race', to='rules.damagetype')),
                ('features', models.ManyToManyField(blank=True, to='rules.feature')),
                ('language_list', models.ManyToManyField(blank=True, to='rules.language')),
                ('skill_list', models.ManyToManyField(blank=True, to='rules.skill')),
                ('spells_available', models.ManyToManyField(blank=True, to='traits.entityclass')),
                ('tool_list', models.ManyToManyField(blank=True, to='actions.tool')),
                ('weapon_list', models.ManyToManyField(blank=True, to='actions.weapon')),
            ],
            options={
                'ordering': ['name'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ProgressTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.IntegerField(validators=[django.core.validators.MaxValueValidator(20), django.core.validators.MinValueValidator(1)])),
                ('known_cantrips', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('known_spells', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_1', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_2', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_3', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_4', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_5', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_6', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_7', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_8', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('spell_slot_9', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('entity_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='traits.entityclass')),
                ('features', models.ManyToManyField(blank=True, to='rules.feature')),
            ],
            options={
                'ordering': ['entity_class', 'level'],
                'unique_together': {('entity_class', 'level')},
            },
        ),
    ]
