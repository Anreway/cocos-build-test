System.register("chunks:///_virtual/ButtonFeedbacks.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, Node, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "90d4ckbniJCCayv4Wlpw/dh", "ButtonFeedbacks", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonFeedbacks = exports('ButtonFeedbacks', (_dec = ccclass('ButtonFeedbacks'), _dec2 = property({
        type: CCFloat,
        tooltip: "Hover reduction time (in seconds)"
      }), _dec3 = property({
        tooltip: "How many times to reduce when hovering"
      }), _dec4 = property({
        type: CCFloat,
        tooltip: "Time to decrease when pressed (in seconds)"
      }), _dec5 = property({
        tooltip: "How many times to reduce when pressed"
      }), _dec6 = property({
        tooltip: "How much to increase after clicking"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonFeedbacks, _Component);
        function ButtonFeedbacks() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hoverDuration", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hoverScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickScale", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickScaleUp", _descriptor5, _assertThisInitialized(_this));
          _this.originalScale = new Vec3();
          return _this;
        }
        var _proto = ButtonFeedbacks.prototype;
        _proto.start = function start() {
          this.originalScale.set(this.node.scale);
          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.onMouseEnter = function onMouseEnter() {
          tween(this.node).to(this.hoverDuration, {
            scale: this.hoverScale
          }).start();
        };
        _proto.onMouseLeave = function onMouseLeave() {
          tween(this.node).to(this.hoverDuration, {
            scale: this.originalScale
          }).start();
        };
        _proto.onClick = function onClick() {
          tween(this.node).to(this.clickDuration, {
            scale: this.clickScale
          }).to(this.clickDuration, {
            scale: this.clickScaleUp
          }).to(this.clickDuration, {
            scale: this.originalScale
          }).start();
        };
        return ButtonFeedbacks;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hoverDuration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hoverScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0.95, 0.95, 0.95);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "clickDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clickScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0.9, 0.9, 0.9);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clickScaleUp", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1.1, 1.1, 1.1);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CopyInviteLink.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, native, Node, Component, TelegramWebApp;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      native = module.native;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a8b26xTwgZDvoZJ4iBk2gKa", "CopyInviteLink", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var copyTextToClipboard = native.copyTextToClipboard;
      var CopyInviteLink = exports('CopyInviteLink', (_dec = ccclass('CopyInviteLink'), _dec2 = property(String), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CopyInviteLink, _Component);
        function CopyInviteLink() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "baseLinkToShare", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CopyInviteLink.prototype;
        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.onClick = /*#__PURE__*/function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var tgWebApp, user, urlForCopy;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context.next = 3;
                  return tgWebApp.init();
                case 3:
                  user = tgWebApp.getTelegramUser();
                  urlForCopy = this.baseLinkToShare + user.id.toString();
                  _context.prev = 5;
                  _context.next = 8;
                  return navigator.clipboard.writeText(urlForCopy);
                case 8:
                  _context.next = 13;
                  break;
                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](5);
                  console.error('Cant copy text with: ', _context.t0);
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[5, 10]]);
          }));
          function onClick() {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        return CopyInviteLink;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseLinkToShare", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'https://t.me/hamsmining_bot/start?startapp=';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './ButtonFeedbacks.ts', './CopyInviteLink.ts', './ShareInviteLink.ts', './SlidePopup.ts', './UserInfoDisplay.ts', './telegram-web.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/ShareInviteLink.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, TelegramWebApp;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9e4eduNVylGtrlb2HE465Qx", "ShareInviteLink", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShareInviteLink = exports('ShareInviteLink', (_dec = ccclass('ShareInviteLink'), _dec2 = property(String), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShareInviteLink, _Component);
        function ShareInviteLink() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "baseLinkToShare", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ShareInviteLink.prototype;
        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.onClick = /*#__PURE__*/function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var tgWebApp, user, urlForShare;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context.next = 3;
                  return tgWebApp.init();
                case 3:
                  user = tgWebApp.getTelegramUser();
                  urlForShare = this.baseLinkToShare + user.id.toString();
                  tgWebApp.share(urlForShare, 'Hi! \nJoin me in the Hamster Hotel Mining game! \nPack your bags and accumulate a $SEM token for your future hotel!');
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClick() {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        return ShareInviteLink;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseLinkToShare", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'https://t.me/hamsmining_bot/start?startapp=';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlidePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Vec3, UITransform, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "318c7GUdQxL9bAkeYE88t3a", "SlidePopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupState = /*#__PURE__*/function (PopupState) {
        PopupState[PopupState["None"] = 0] = "None";
        PopupState[PopupState["Hidden"] = 1] = "Hidden";
        PopupState[PopupState["Showing"] = 2] = "Showing";
        PopupState[PopupState["Shown"] = 3] = "Shown";
        PopupState[PopupState["Hiding"] = 4] = "Hiding";
        return PopupState;
      }(PopupState || {});
      var SlideDirection = /*#__PURE__*/function (SlideDirection) {
        SlideDirection[SlideDirection["Left"] = 0] = "Left";
        SlideDirection[SlideDirection["Right"] = 1] = "Right";
        SlideDirection[SlideDirection["Top"] = 2] = "Top";
        SlideDirection[SlideDirection["Bottom"] = 3] = "Bottom";
        return SlideDirection;
      }(SlideDirection || {});
      var SlidePopup = exports('SlidePopup', (_dec = ccclass('SlidePopup'), _dec2 = property({
        type: Enum(SlideDirection)
      }), _dec3 = property({
        type: Enum(SlideDirection)
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlidePopup, _Component);
        function SlidePopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "showDirection", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDirection", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDuration", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isOpenAtStart", _descriptor5, _assertThisInitialized(_this));
          _this.state = PopupState.None;
          return _this;
        }
        var _proto = SlidePopup.prototype;
        _proto.start = function start() {
          this.initPosition();
        };
        _proto.initPosition = function initPosition() {
          if (this.isOpenAtStart) {
            this.node.setPosition(new Vec3(0, 0, 0));
            this.state = PopupState.Shown;
          } else {
            var startPos = this.getStartPosition(this.hideDirection);
            this.node.setPosition(startPos);
            this.state = PopupState.Hidden;
          }
        };
        _proto.getStartPosition = function getStartPosition(direction) {
          var canvasSize = this.node.parent.getComponent(UITransform).contentSize;
          switch (direction) {
            case SlideDirection.Left:
              return new Vec3(-canvasSize.width, 0, 0);
            case SlideDirection.Right:
              return new Vec3(canvasSize.width, 0, 0);
            case SlideDirection.Top:
              return new Vec3(0, canvasSize.height, 0);
            case SlideDirection.Bottom:
              return new Vec3(0, -canvasSize.height, 0);
            default:
              return new Vec3(0, 0, 0);
          }
        };
        _proto.show = function show() {
          var _this2 = this;
          if (this.state !== PopupState.Hidden && this.state !== PopupState.Hiding && this.state !== PopupState.None) {
            return;
          }
          this.state = PopupState.Showing;
          var startPos = this.getStartPosition(this.showDirection);
          this.node.setPosition(startPos);
          tween(this.node).to(this.showDuration, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'sineOut'
          }).call(function () {
            _this2.state = PopupState.Shown;
          }).start();
        };
        _proto.hide = function hide() {
          var _this3 = this;
          if (this.state !== PopupState.Shown && this.state !== PopupState.Showing) {
            return;
          }
          this.state = PopupState.Hiding;
          var endPos = this.getStartPosition(this.hideDirection);
          tween(this.node).to(this.hideDuration, {
            position: endPos
          }, {
            easing: 'sineIn'
          }).call(function () {
            _this3.state = PopupState.Hidden;
          }).start();
        };
        return SlidePopup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showDirection", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlideDirection.Left;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hideDirection", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlideDirection.Right;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hideDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isOpenAtStart", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/telegram-web.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, sys;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "f264fjmTxJJEp4hiLyX+sL4", "telegram-web", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tgLoadPromise = new Promise(function (resolve, reject) {
        if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
          var script = document.createElement("script");
          script.src = "https://telegram.org/js/telegram-web-app.js";
          script.async = true;
          script.onload = function () {
            var intervalId = setInterval(function () {
              if (window.Telegram && window.Telegram.WebApp) {
                resolve(window.Telegram.WebApp);
                clearInterval(intervalId);
              }
            }, 100);
          };
          script.onerror = function () {
            return reject(new Error("Unable to load TelegramWebApp SDK, please check logs."));
          };
          document.head.appendChild(script);
        }
      });
      var TelegramWebApp = exports('TelegramWebApp', (_dec = ccclass('TelegramWebApp'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TelegramWebApp() {
          this._tgWebAppJS = null;
        }
        var _proto = TelegramWebApp.prototype;
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return tgLoadPromise;
                case 2:
                  this._tgWebAppJS = _context.sent;
                  if (!this._tgWebAppJS) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return", Promise.resolve({
                    success: true
                  }));
                case 7:
                  return _context.abrupt("return", Promise.resolve({
                    success: false
                  }));
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.openTelegramLink = function openTelegramLink(url) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          this._tgWebAppJS.openTelegramLink(url);
        };
        _proto.share = function share(url, text) {
          var shareUrl = 'https://t.me/share/url?url=' + url + '&' + new URLSearchParams({
            text: text || ''
          }).toString();
          this.openTelegramLink(shareUrl);
        };
        _proto.shareToStory = function shareToStory(media_url, shareText, widget_link_url, widget_link_name) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          var widget_link = {
            text: shareText,
            widget_link: {
              url: widget_link_url,
              name: widget_link_name
            }
          };
          this._tgWebAppJS.shareToStory(media_url, widget_link);
        };
        _proto.getTelegramWebApp = function getTelegramWebApp() {
          return this._tgWebAppJS;
        };
        _proto.getTelegramWebAppInitData = function getTelegramWebAppInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe;
        };
        _proto.getTelegramUser = function getTelegramUser() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe.user;
        };
        _proto.getTelegramInitData = function getTelegramInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initData;
        };
        _proto.openInvoice = function openInvoice(url, callback) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          this._tgWebAppJS.openInvoice(url, callback);
        };
        _proto.alert = function alert(message) {
          this._tgWebAppJS.showAlert(message);
        };
        _createClass(TelegramWebApp, null, [{
          key: "Instance",
          get: function get() {
            if (!TelegramWebApp._instance) {
              TelegramWebApp._instance = new TelegramWebApp();
            }
            return TelegramWebApp._instance;
          }
        }]);
        return TelegramWebApp;
      }(), _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserInfoDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, ImageAsset, Texture2D, SpriteFrame, Component, TelegramWebApp;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "55d2bEdrVpIpou6drI10Zei", "UserInfoDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UserInfoDisplay = exports('UserInfoDisplay', (_dec = ccclass('UserInfoDisplay'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserInfoDisplay, _Component);
        function UserInfoDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userInfoLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarUrlLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userAvatar", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UserInfoDisplay.prototype;
        _proto.start = function start() {
          this.updateUserInfo();
        };
        _proto.updateUserInfo = /*#__PURE__*/function () {
          var _updateUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var tgWebApp, user;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context.next = 3;
                  return tgWebApp.init();
                case 3:
                  user = tgWebApp.getTelegramUser();
                  if (user) {
                    if (this.userInfoLabel) {
                      this.userInfoLabel.string = "ID: " + user.id + "\nUsername: " + user.username;
                    }
                    if (this.avatarUrlLabel) {
                      this.avatarUrlLabel.string = "" + user.photo_url;
                    }
                    if (user.photo_url && this.userAvatar) {
                      this.loadAvatar(user.photo_url);
                    }
                  } else {
                    console.error("User data is not available.");
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function updateUserInfo() {
            return _updateUserInfo.apply(this, arguments);
          }
          return updateUserInfo;
        }();
        _proto.loadAvatar = function loadAvatar(url) {
          var _this2 = this;
          if (!this.userAvatar) return;
          var imgAsset = new ImageAsset();
          var img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = url;
          img.onload = function () {
            imgAsset.reset(img);
            var texture = new Texture2D();
            texture.image = imgAsset;
            texture.setFilters(Texture2D.Filter.LINEAR, Texture2D.Filter.LINEAR);
            var spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            _this2.userAvatar.type = Sprite.Type.SIMPLE;
            _this2.userAvatar.sizeMode = Sprite.SizeMode.RAW;
            _this2.userAvatar.spriteFrame = spriteFrame;
          };
          img.onerror = function () {
            console.error("Failed to load avatar image.");
          };
        };
        return UserInfoDisplay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userInfoLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "avatarUrlLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userAvatar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map