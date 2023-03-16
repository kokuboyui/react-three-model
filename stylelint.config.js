module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    // 同じルール内の別のプロパティ値が原因で無視されるプロパティ値を禁止
    'plugin/declaration-block-no-ignored-properties': true,
    // sans-serifなどの一般的な使えるようなフォントを１つ以上指定がない場合にエラー
    'font-family-no-missing-generic-family-keyword': true,
    // cssの上書き順が適切でない場合にエラー
    'declaration-block-no-shorthand-property-overrides': true,
    // calc()の演算子の左右にスペースが入っているかをチェック
    'function-calc-no-unspaced-operator': true,
    // 16進数表記が正しいかチェック
    'color-no-invalid-hex': true,
    // 正しい単位が使われているかをチェック
    'unit-no-unknown': true,
    // 存在しないプロパティが使われていないかをチェック
    'property-no-unknown': true,
    // 疑似要素ダブルコロン
    'selector-pseudo-element-colon-notation': 'double',
    // プロパティで冗長な値を許可しない
    'shorthand-property-no-redundant-values': true,
    // 0pxを0にするかどうかを指定
    'length-zero-no-unit': true,
    // 16進数の文字列は小文字に変更
    'color-hex-length': 'short',
    // プロパティの指定は小文字に
    'value-keyword-case': null,
    // 関数の名前は小文字に変更
    'function-name-case': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'mixin',
          'each',
          'function',
          'at-root',
          'if',
          'return',
          'else',
          'use',
          'forward',
          'extend',
          'for',
          'error',
          'warn',
        ],
      },
    ],
    'function-no-unknown': null,
    'custom-property-pattern': null,
    'order/order': [['custom-properties', 'declarations']],
    'order/properties-alphabetical-order': true,
    'scss/operator-no-newline-after': null,
    'scss/at-rule-no-unknown': true,
  },
};
