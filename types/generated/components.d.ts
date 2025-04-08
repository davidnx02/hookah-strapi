import type { Schema, Attribute } from '@strapi/strapi';

export interface AchievementAchievement extends Schema.Component {
  collectionName: 'components_achievement_achievements';
  info: {
    displayName: 'achievement';
  };
  attributes: {
    place: Attribute.String;
    name: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HeroButton extends Schema.Component {
  collectionName: 'components_hero_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    variant: Attribute.Enumeration<['default', 'secondary', 'accent']>;
  };
}

export interface InstagramPost extends Schema.Component {
  collectionName: 'components_instagram_posts';
  info: {
    displayName: 'post';
  };
  attributes: {
    link: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface NavigationButton extends Schema.Component {
  collectionName: 'components_navigation_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {};
}

export interface NavigationMenu extends Schema.Component {
  collectionName: 'components_navigation_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface OffersOffer extends Schema.Component {
  collectionName: 'components_offers_offers';
  info: {
    displayName: 'Offer';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SmallMenuHookahs extends Schema.Component {
  collectionName: 'components_small_menu_hookahs';
  info: {
    displayName: 'Hookahs';
  };
  attributes: {
    name: Attribute.String;
    descripiton: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface StatStat extends Schema.Component {
  collectionName: 'components_stat_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    value: Attribute.String;
    label: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'achievement.achievement': AchievementAchievement;
      'hero.button': HeroButton;
      'instagram.post': InstagramPost;
      'navigation.button': NavigationButton;
      'navigation.menu': NavigationMenu;
      'offers.offer': OffersOffer;
      'small-menu.hookahs': SmallMenuHookahs;
      'stat.stat': StatStat;
    }
  }
}
