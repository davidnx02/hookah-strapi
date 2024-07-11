import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutTrophies extends Schema.Component {
  collectionName: 'components_about_trophies';
  info: {
    displayName: 'trophies';
  };
  attributes: {
    competition: Attribute.String;
    place: Attribute.String;
  };
}

export interface CateringService extends Schema.Component {
  collectionName: 'components_catering_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    name: Attribute.String;
    hookah_amount: Attribute.String;
    duration: Attribute.String;
    price: Attribute.Decimal;
    description: Attribute.Text;
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

export interface PromotionPromotion extends Schema.Component {
  collectionName: 'components_promotion_promotions';
  info: {
    displayName: 'promotion';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button_label: Attribute.String;
    button_link: Attribute.String;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.trophies': AboutTrophies;
      'catering.service': CateringService;
      'navigation.button': NavigationButton;
      'navigation.menu': NavigationMenu;
      'promotion.promotion': PromotionPromotion;
      'small-menu.hookahs': SmallMenuHookahs;
    }
  }
}
