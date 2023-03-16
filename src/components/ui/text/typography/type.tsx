import type { ComponentProps } from 'react';

// Tagの型
export type TTypographyTag =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'
  | 'dt'
  | 'dd'
  | 'sup'
  | 'sub';

// font-sizeの型
export type TTypographyFontSize = 10 | 11 | 12 | 13 | 14 | 16;

// font-familyの型
export type TTypographyFontFamily = 'ja-primary' | 'en-primary';

// font-weightの型
export type TTypographyFontWeight = 400 | 700 | 'normal' | 'bold';

// line-heightの型
export type TTypographyLineHeight = 0.6 | 1 | 1.2 | 1.3 | 1.4 | 1.6 | 1.8 | 2.0;

// letter spacingの型
export type TTypographyLetterSpacing = 0.01 | 0.02;

// 文字色の型
export type TTypographyColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary';

// typographyの設定
export type TTypographySetting = {
  size?: TTypographyFontSize;
  weight?: TTypographyFontWeight;
  lineHeight?: TTypographyLineHeight;
  letterSpacing?: TTypographyLetterSpacing;
  color?: TTypographyColor;
};

// メディアクエリに応じたフォントプロパティ
export type TTypographySettings = {
  // webの設定
  xs?: TTypographySetting;
  sm?: TTypographySetting;
  md?: TTypographySetting;
  lg?: TTypographySetting;
  xl?: TTypographySetting;
  xxl?: TTypographySetting;
};

// Reactコンポーネントの型をextendするための型
export type TComponentProps = ComponentProps<TTypographyTag>;

export type TTypographyProps = TComponentProps & {
  Tag: TTypographyTag;
  settings?: TTypographySettings;
  family?: TTypographyFontFamily;
};
