/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/banner/attributes.js":
/*!*****************************************!*\
  !*** ./src/blocks/banner/attributes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {
  bonusLabel: {
    type: "string"
  },
  bonusLink: {
    type: "object",
    default: {
      url: "#",
      openInNewTab: true
    }
  },
  bonusBackgroundColor: {
    type: "string",
    default: "#a97bff"
  },
  bonusLabelColor: {
    type: "string",
    default: "#fff"
  },
  domain: {
    type: "string"
  },
  domainLink: {
    type: "object",
    default: {
      url: "#",
      openInNewTab: true
    }
  },
  domainLinkColor: {
    type: "string",
    default: "#a97bff"
  },
  googleLink: {
    type: "object",
    default: {
      url: "#",
      openInNewTab: true
    }
  },
  appleLink: {
    type: "object",
    default: {
      url: "#",
      openInNewTab: true
    }
  },
  logo: {
    type: "object"
  },
  backgroundColor: {
    type: "string",
    default: "#fff"
  },
  borderColor: {
    type: "string",
    default: "#bdabda"
  },
  paymentBackgroundColor: {
    type: "string",
    default: "#f5eeff"
  },
  payment1: {
    type: "object",
    default: {}
  },
  payment2: {
    type: "object",
    default: {}
  },
  payment3: {
    type: "object",
    default: {}
  },
  payment4: {
    type: "object",
    default: {}
  },
  payment5: {
    type: "object",
    default: {}
  },
  payment6: {
    type: "object",
    default: {}
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/banner/components/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/banner/components/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkControl: () => (/* reexport safe */ _link_control__WEBPACK_IMPORTED_MODULE_0__.LinkControl),
/* harmony export */   Payment: () => (/* reexport safe */ _payment__WEBPACK_IMPORTED_MODULE_1__.Payment)
/* harmony export */ });
/* harmony import */ var _link_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link-control */ "./src/blocks/banner/components/link-control.js");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment */ "./src/blocks/banner/components/payment.js");



/***/ }),

/***/ "./src/blocks/banner/components/link-control.js":
/*!******************************************************!*\
  !*** ./src/blocks/banner/components/link-control.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkControl: () => (/* binding */ LinkControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const {
  Fragment
} = wp.element;
const LinkControl = ({
  label,
  link,
  linkName,
  setAttributes
}) => {
  const handleChangeLink = v => {
    setAttributes({
      [linkName]: {
        ...link,
        url: v
      }
    });
  };
  const handleChangeToggle = () => {
    setAttributes({
      [linkName]: {
        ...link,
        openInNewTab: !link.openInNewTab
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: label,
    value: link && link.url,
    onChange: handleChangeLink
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Open in new tab", "wp-custom-blocks"),
    checked: link && link.openInNewTab,
    onChange: handleChangeToggle
  }));
};

/***/ }),

/***/ "./src/blocks/banner/components/payment.js":
/*!*************************************************!*\
  !*** ./src/blocks/banner/components/payment.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Payment: () => (/* binding */ Payment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const {
  Fragment
} = wp.element;
const Payment = ({
  name,
  photo,
  backgroundColor,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "payment",
    style: {
      backgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "photo"
  }, photo ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      [name]: {
        photo: media
      }
    }),
    allowedTypes: ["image"],
    value: photo && photo.id,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: photo.url,
        alt: photo.alt || name
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        containerClassName: "edit",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Edit Logo", "wp-custom-blocks"),
        onClick: open,
        icon: "edit"
      }));
    }
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
    onSelect: media => setAttributes({
      [name]: {
        photo: media
      }
    }),
    allowedTypes: ["image"],
    multiple: false,
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Logo", "wp-custom-blocks"),
      instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Upload logo", "wp-custom-blocks")
    },
    icon: "format-image"
  }))));
};

/***/ }),

/***/ "./src/blocks/banner/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/banner/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/blocks/banner/components/index.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/banner/inspector.js");
/* harmony import */ var _assets_appStore_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/appStore.png */ "./src/blocks/banner/assets/appStore.png");
/* harmony import */ var _assets_googlePlay_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/googlePlay.png */ "./src/blocks/banner/assets/googlePlay.png");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/banner/editor.scss");




const {
  Fragment,
  useState
} = wp.element;





function Edit({
  attributes,
  setAttributes
}) {
  const {
    logo,
    borderColor,
    backgroundColor,
    bonusLabel,
    bonusLabelColor,
    bonusBackgroundColor,
    domain,
    domainLink,
    domainLinkColor,
    bonusLink,
    appleLink,
    googleLink,
    paymentBackgroundColor,
    ...payments
  } = attributes;
  const [linkPanel, showLinkPanel] = useState(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), logo && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      logo: media
    }),
    allowedTypes: ["image"],
    value: logo && logo.id,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Edit Logo", "wp-custom-blocks"),
        onClick: open,
        icon: "edit"
      });
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Add Link", "wp-custom-blocks"),
    onClick: () => showLinkPanel(true),
    icon: "admin-links"
  })), linkPanel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    position: "bottom right",
    onFocusOutside: () => showLinkPanel(false),
    offset: 5
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "link-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_4__.LinkControl, {
    link: appleLink,
    linkName: "appleLink",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("AppStore Link", "wp-custom-blocks"),
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_4__.LinkControl, {
    link: googleLink,
    linkName: "googleLink",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Google Link", "wp-custom-blocks"),
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_4__.LinkControl, {
    link: bonusLink,
    linkName: "bonusLink",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Button Link", "wp-custom-blocks"),
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_4__.LinkControl, {
    link: domainLink,
    linkName: "domainLink",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Domain Link", "wp-custom-blocks"),
    setAttributes: setAttributes
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    style: {
      borderColor,
      backgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "banner-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo"
  }, logo ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: logo.url,
    alt: logo.alt
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
    onSelect: media => setAttributes({
      logo: media
    }),
    allowedTypes: ["image"],
    multiple: false,
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Logo", "wp-custom-blocks"),
      instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Upload logo", "wp-custom-blocks")
    },
    icon: "format-image"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "app-links"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_googlePlay_png__WEBPACK_IMPORTED_MODULE_7__,
    alt: "GooglePlay"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_appStore_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: "AppStore"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bonus",
    style: {
      backgroundColor: bonusBackgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: bonusLabel,
    onChange: v => setAttributes({
      bonusLabel: v
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bonus button text..", "wp-custom-blocks"),
    style: {
      color: bonusLabelColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender, null)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "additions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "domain"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "\u516C\u5F0F\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8: "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    value: domain,
    onChange: v => setAttributes({
      domain: v
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Domain..", "wp-custom-blocks"),
    style: {
      color: domainLinkColor
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "payments"
  }, Object.entries(payments).map(([name, {
    photo
  }], index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_4__.Payment, {
    key: `${name}-${index}`,
    name: name,
    photo: photo,
    backgroundColor: paymentBackgroundColor,
    setAttributes: setAttributes
  })))));
}

/***/ }),

/***/ "./src/blocks/banner/index.js":
/*!************************************!*\
  !*** ./src/blocks/banner/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/banner/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/banner/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/banner/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/banner/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/banner/style.scss");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: "welcome-widgets-menus",
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/banner/inspector.js":
/*!****************************************!*\
  !*** ./src/blocks/banner/inspector.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controls_color_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controls/color-control */ "./src/controls/color-control/index.js");




const {
  InspectorControls
} = wp.blockEditor;
const Inspector = ({
  attributes,
  setAttributes
}) => {
  const {
    borderColor,
    backgroundColor,
    bonusLabelColor,
    bonusBackgroundColor,
    domainLinkColor,
    paymentBackgroundColor
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Colors", "wp-custom-blocks"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Color", "wp-custom-blocks"),
    color: backgroundColor,
    onChange: v => setAttributes({
      backgroundColor: v
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Color", "wp-custom-blocks"),
    color: borderColor,
    onChange: v => setAttributes({
      borderColor: v
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Bonus Label Color", "wp-custom-blocks"),
    color: bonusLabelColor,
    onChange: v => setAttributes({
      bonusLabelColor: v
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Bonus Background Color", "wp-custom-blocks"),
    color: bonusBackgroundColor,
    onChange: v => setAttributes({
      bonusBackgroundColor: v
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Domain Link Color", "wp-custom-blocks"),
    color: domainLinkColor,
    onChange: v => setAttributes({
      domainLinkColor: v
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Payment Background Color", "wp-custom-blocks"),
    color: paymentBackgroundColor,
    onChange: v => setAttributes({
      paymentBackgroundColor: v
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/banner/save.js":
/*!***********************************!*\
  !*** ./src/blocks/banner/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_appStore_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/appStore.png */ "./src/blocks/banner/assets/appStore.png");
/* harmony import */ var _assets_googlePlay_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/googlePlay.png */ "./src/blocks/banner/assets/googlePlay.png");

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



function save({
  attributes
}) {
  const {
    logo,
    borderColor,
    backgroundColor,
    domain,
    bonusLabel,
    bonusLink,
    bonusLabelColor,
    bonusBackgroundColor,
    googleLink,
    appleLink,
    domainLink,
    domainLinkColor,
    paymentBackgroundColor,
    ...payments
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    style: {
      borderColor,
      backgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "banner-header"
  }, logo && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo"
  }, domainLink ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: domainLink && domainLink.url,
    target: domainLink && domainLink.openInNewTab ? "_blank" : "_self",
    rel: domainLink && domainLink.openInNewTab ? "noopener noreferrer" : "noopener"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: logo.url,
    alt: logo.alt || domain
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: logo.url,
    alt: logo.alt || domain
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "app-links"
  }, googleLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "link",
    href: googleLink && googleLink.url,
    target: googleLink && googleLink.openInNewTab ? "_blank" : "_self",
    rel: googleLink && googleLink.openInNewTab ? "noopener noreferrer" : "noopener"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_googlePlay_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "GooglePlay"
  })), appleLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "link",
    href: appleLink && appleLink.url,
    target: appleLink && appleLink.openInNewTab ? "_blank" : "_self",
    rel: appleLink && appleLink.openInNewTab ? "noopener noreferrer" : "noopener"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_appStore_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: "AppStore"
  })))), bonusLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "link",
    href: bonusLink && bonusLink.url,
    target: bonusLink && bonusLink.openInNewTab ? "_blank" : "_self",
    rel: bonusLink && bonusLink.openInNewTab ? "noopener noreferrer" : "noopener"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bonus",
    style: {
      backgroundColor: bonusBackgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: bonusLabel,
    style: {
      color: bonusLabelColor
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "additions"
  }, domain && domainLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "domain"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "\u516C\u5F0F\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8: "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "domain-link",
    href: domainLink && domainLink.url,
    target: domainLink && domainLink.openInNewTab ? "_blank" : "_self",
    rel: domainLink && domainLink.openInNewTab ? "noopener noreferrer" : "noopener"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    value: domain,
    style: {
      color: domainLinkColor
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "blocks"
  }, payments && Object.entries(payments).filter(([, {
    photo
  }]) => Boolean(photo)).map(([name, {
    photo
  }], index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "payment",
    key: `${name}-${index}`,
    style: {
      backgroundColor: paymentBackgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "photo"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: photo?.url,
    alt: photo?.alt || name
  }))))));
}

/***/ }),

/***/ "./src/controls/color-control/constants.js":
/*!*************************************************!*\
  !*** ./src/controls/color-control/constants.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLORS: () => (/* binding */ COLORS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const COLORS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black", "wp-custom-blocks"),
  color: "#000"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("White", "wp-custom-blocks"),
  color: "#fff"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Green", "wp-custom-blocks"),
  color: "#17946d"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Purple", "wp-custom-blocks"),
  color: "#a689ff"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Purple black", "wp-custom-blocks"),
  color: "#1c1230"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "wp-custom-blocks"),
  color: "#a97bff"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "wp-custom-blocks"),
  color: "#bdabda"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "wp-custom-blocks"),
  color: "#f5eeff"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "wp-custom-blocks"),
  color: "#343741"
}];

/***/ }),

/***/ "./src/controls/color-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/color-control/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/controls/color-control/constants.js");
/* harmony import */ var _color_control_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-control.scss */ "./src/controls/color-control/color-control.scss");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const ColorControl = ({
  label,
  color,
  onChange,
  instanceId
}) => {
  const [colorPanel, setColorPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const id = `color-control-${instanceId}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "control-container color-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "color-label",
    id: id,
    label: label
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "image-rotate",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Reset", "wp-custom-blocks"),
    onClick: () => onChange(""),
    className: `reset-button ${color ? "active" : "disabled"}`
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "color-indicator",
    onClick: () => setColorPanel(true)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: color
  })), colorPanel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "bottom right",
    onFocusOutside: () => setColorPanel(false),
    offset: 10
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "color-panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: color,
    onChangeComplete: value => onChange(value.hex),
    disableAlpha: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "colors-palette"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "label mb-8",
    htmlFor: "colors-palette"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Colors Palette", "wp-custom-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "colors-palette"
  }, _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS?.map((paletteColor, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
      className: `color-indicator ${paletteColor.color === color ? "active" : ""}`,
      title: paletteColor.name,
      key: index,
      colorValue: paletteColor.color,
      onClick: () => onChange(paletteColor.color)
    });
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withInstanceId)(ColorControl));

/***/ }),

/***/ "./src/blocks/banner/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/banner/editor.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/banner/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/banner/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/color-control/color-control.scss":
/*!*******************************************************!*\
  !*** ./src/controls/color-control/color-control.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/banner/assets/appStore.png":
/*!***********************************************!*\
  !*** ./src/blocks/banner/assets/appStore.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/appStore.0d88dd28.png";

/***/ }),

/***/ "./src/blocks/banner/assets/googlePlay.png":
/*!*************************************************!*\
  !*** ./src/blocks/banner/assets/googlePlay.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/googlePlay.ccce5311.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/banner/block.json":
/*!**************************************!*\
  !*** ./src/blocks/banner/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-block/banner","version":"0.1.0","title":"Banner","category":"widgets","description":"Banner block with links and payments","supports":{"html":false},"textdomain":"banner-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/banner/index": 0,
/******/ 			"blocks/banner/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwp_custom_blocks"] = globalThis["webpackChunkwp_custom_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/banner/style-index"], () => (__webpack_require__("./src/blocks/banner/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map