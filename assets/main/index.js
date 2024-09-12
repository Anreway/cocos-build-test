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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
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
          _initializerDefineProperty(_this, "useHoverTween", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useClickTween", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hoverDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hoverScale", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickDuration", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickScale", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickScaleUp", _descriptor7, _assertThisInitialized(_this));
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
          if (!this.useHoverTween) return;
          tween(this.node).to(this.hoverDuration, {
            scale: this.hoverScale
          }).start();
        };
        _proto.onMouseLeave = function onMouseLeave() {
          if (!this.useHoverTween) return;
          tween(this.node).to(this.hoverDuration, {
            scale: this.originalScale
          }).start();
        };
        _proto.onClick = function onClick() {
          if (!this.useClickTween) return;
          tween(this.node).to(this.clickDuration, {
            scale: this.clickScale
          }).to(this.clickDuration / 2, {
            scale: this.clickScaleUp
          }).to(this.clickDuration, {
            scale: this.originalScale
          }).start();
        };
        return ButtonFeedbacks;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "useHoverTween", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "useClickTween", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hoverDuration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hoverScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0.95, 0.95, 0.95);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clickDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "clickScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0.9, 0.9, 0.9);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "clickScaleUp", [_dec6], {
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

System.register("chunks:///_virtual/FriendItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "25199AKiYNHBZj7N6FH0cx9", "FriendItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FriendItem = exports('FriendItem', (_dec = ccclass('FriendItem'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FriendItem, _Component);
        function FriendItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "friendNameLabel", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FriendItem.prototype;
        _proto.init = function init(friendName) {
          this.friendNameLabel.string = friendName;
        };
        return FriendItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "friendNameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FriendsScrollViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FriendItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Component, FriendItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      FriendItem = module.FriendItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a5f41y+2rdCbbTmgHQq3rA+", "FriendsScrollViewer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FriendsScrollViewer = exports('FriendsScrollViewer', (_dec = ccclass('FriendsScrollViewer'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FriendsScrollViewer, _Component);
        function FriendsScrollViewer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "numberOfFriends", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "friendItemPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentNode", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FriendsScrollViewer.prototype;
        _proto.start = function start() {
          //get all friends and init
          this.init();
        };
        _proto.init = function init( /*/initing data/*/
        ) {
          if (this.friendItemPrefab && this.contentNode) {
            for (var i = 0; i < this.numberOfFriends; i++) {
              var newFriendItemPrefab = instantiate(this.friendItemPrefab);
              this.contentNode.addChild(newFriendItemPrefab);
              newFriendItemPrefab.getComponent(FriendItem).init("friend num " + i.toString());
            }
          }
        };
        return FriendsScrollViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numberOfFriends", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "friendItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
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

System.register("chunks:///_virtual/LoadingHider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Mask, Sprite, tween, Component;
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
      Color = module.Color;
      Mask = module.Mask;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "b1f4eUqnYlAk7UbYrN3mV8t", "LoadingHider", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingHider = exports('LoadingHider', (_dec = ccclass('LoadingHider'), _dec2 = property(Node), _dec3 = property({
        type: Color
      }), _dec4 = property({
        type: Color
      }), _dec5 = property(Mask), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingHider, _Component);
        function LoadingHider() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "myNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDuration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disactivateOnHide", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shownColor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hidenColor", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskToUse", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LoadingHider.prototype;
        _proto.show = function show() {
          if (this.myNode) {
            this.myNode.active = true;
            var sprite = this.myNode.getComponent(Sprite);
            if (!sprite) return;
            if (this.maskToUse) {
              this.maskToUse.enabled = true;
            }
            sprite.color = this.shownColor;
          }
        };
        _proto.hide = function hide() {
          var _this2 = this;
          if (this.myNode) {
            var sprite = this.myNode.getComponent(Sprite);
            if (!sprite) return;
            if (this.maskToUse) {
              this.maskToUse.enabled = false;
            }
            var initialColor = sprite.color.clone();
            var targetColor = this.hidenColor;
            tween(sprite).to(this.hideDuration, {
              color: targetColor
            }, {
              onUpdate: function onUpdate() {
                sprite.color = new Color(initialColor.r, initialColor.g, initialColor.b, sprite.color.a);
              }
            }).call(function () {
              if (_this2.disactivateOnHide) {
                _this2.myNode.active = false;
              }
            }).start();
          }
        };
        return LoadingHider;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hideDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "disactivateOnHide", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "shownColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hidenColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maskToUse", [_dec5], {
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

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './ButtonFeedbacks.ts', './CopyInviteLink.ts', './FriendItem.ts', './FriendsScrollViewer.ts', './LoadingHider.ts', './MainMiningLabels.ts', './MiningCollectController.ts', './PopupManager.ts', './RotatableUITransform.ts', './ServerCommunicator.ts', './ShareInviteLink.ts', './SlidePopup.ts', './SuitcaseItemsController.ts', './TaskItem.ts', './TasksScrollViewer.ts', './TestGetLabel.ts', './TimerLabel.ts', './UserDataManager.ts', './UserInfoDisplay.ts', './telegram-web.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainMiningLabels.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, UserDataManager;
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
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c0333NBcHZDeKGnxjD6X+Hw", "MainMiningLabels", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainMiningLabels = exports('MainMiningLabels', (_dec = ccclass('MainMiningLabels'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainMiningLabels, _Component);
        function MainMiningLabels() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "balanceLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balancePrefix", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentMinedLabel", _descriptor3, _assertThisInitialized(_this));
          _this.isMiningActive = false;
          _this.endDate = null;
          _this.timeDifference = 0;
          return _this;
        }
        var _proto = MainMiningLabels.prototype;
        _proto.start = function start() {
          this.updateBalanceLabel();
        };
        _proto.update = function update(dt) {
          if (UserDataManager.instance.isInited) {
            this.updateCurrentMinedLabel();
          }
        };
        _proto.updateCurrentMinedLabel = function updateCurrentMinedLabel() {
          var startDateStr = UserDataManager.instance.getUserMiningStartDate();
          if (!startDateStr) {
            this.currentMinedLabel.string = "00.00";
            return;
          }
          var startDate = new Date(startDateStr.replace(/-/g, "/"));
          var DurationMs = UserDataManager.instance.getUserCurrentDuration() * 60 * 60 * 1000;
          this.timeDifference = UserDataManager.instance.getTimeDifference();
          if (!this.timeDifference) {
            console.error("can't get sync time from userDataManager");
            return;
          }
          this.endDate = new Date(startDate.getTime() + DurationMs);
          var currentTime = new Date(new Date().getTime() + this.timeDifference);
          var timeLeft = this.endDate.getTime() - currentTime.getTime();

          //console.log(timeLeft/(1000*60*60)) -- выводит что осталось 10 часов. Но с

          if (timeLeft <= 0) {
            this.currentMinedLabel.string = (UserDataManager.instance.getUserCurrentSpeed() * UserDataManager.instance.getUserCurrentDuration()).toFixed(2);
            this.isMiningActive = false;
          } else {
            var timePassedMs = currentTime.getTime() - startDate.getTime();
            var timePassedHours = timePassedMs / (1000 * 60 * 60);
            var minedAmount = timePassedHours * UserDataManager.instance.getUserCurrentSpeed();
            this.currentMinedLabel.string = minedAmount.toFixed(2);
            this.isMiningActive = true;
          }
        };
        _proto.updateBalanceLabel = /*#__PURE__*/function () {
          var _updateBalanceLabel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  this.balanceLabel.string = this.balancePrefix + UserDataManager.instance.getUserBalance().toFixed(2);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function updateBalanceLabel() {
            return _updateBalanceLabel.apply(this, arguments);
          }
          return updateBalanceLabel;
        }();
        return MainMiningLabels;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "balanceLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "balancePrefix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Balance ($SEM): ';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentMinedLabel", [_dec3], {
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

System.register("chunks:///_virtual/MiningCollectController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TimerLabel.ts', './UserDataManager.ts', './ServerCommunicator.ts', './ButtonFeedbacks.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Color, Sprite, Component, TimerLabel, UserDataManager, ServerCommunicator, ButtonFeedbacks;
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
      Node = module.Node;
      Color = module.Color;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      TimerLabel = module.TimerLabel;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }, function (module) {
      ButtonFeedbacks = module.ButtonFeedbacks;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "08082H0P39LmrySN28jrFBO", "MiningCollectController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MiningCollectController = exports('MiningCollectController', (_dec = ccclass('MiningCollectController'), _dec2 = property(TimerLabel), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property({
        type: Color
      }), _dec6 = property({
        type: Color
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiningCollectController, _Component);
        function MiningCollectController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "miningTimer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miningSpeedLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "collectMiningNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miningSpeedPostfix", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "readyForCollectNodeColor", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notReadyForCollectNodeColor", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MiningCollectController.prototype;
        _proto.start = function start() {
          this.init();
        };
        _proto.update = function update(dt) {
          if (UserDataManager.instance.isInited) {
            this.updateCollectNode();
          }
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var startDateStr, duration;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  if (this.miningSpeedLabel) {
                    this.miningSpeedLabel.string = UserDataManager.instance.getUserCurrentSpeed().toString() + this.miningSpeedPostfix;
                  }
                  if (this.miningTimer) {
                    startDateStr = UserDataManager.instance.getUserMiningStartDate();
                    duration = UserDataManager.instance.getUserCurrentDuration();
                    this.miningTimer.init(startDateStr, duration);
                  }
                  if (this.collectMiningNode) {
                    this.collectMiningNode.on(Node.EventType.TOUCH_END, this.onClickCollectMiningNode, this);
                  }
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
        _proto.onClickCollectMiningNode = function onClickCollectMiningNode() {
          if (!this.miningTimer.isTimerActive) {
            this.tryCollectMinedToServer();
          }
        };
        _proto.tryCollectMinedToServer = /*#__PURE__*/function () {
          var _tryCollectMinedToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var userId, response, isCollected;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  userId = UserDataManager.instance.getUserId();
                  _context2.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('collect_mining?user_id=' + userId);
                case 3:
                  response = _context2.sent;
                  isCollected = response;
                  if (isCollected) {
                    UserDataManager.instance.forceUpdateUserInfo();
                  } else {
                    console.log('cant collect mined sem!');
                  }
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function tryCollectMinedToServer() {
            return _tryCollectMinedToServer.apply(this, arguments);
          }
          return tryCollectMinedToServer;
        }();
        _proto.updateMe = function updateMe() {};
        _proto.updateCollectNode = function updateCollectNode() {
          if (this.collectMiningNode) {
            if (this.miningTimer.isTimerActive) {
              this.collectMiningNode.getComponent(Sprite).color = this.notReadyForCollectNodeColor;
              this.collectMiningNode.getComponent(ButtonFeedbacks).useClickTween = false;
            } else {
              this.collectMiningNode.getComponent(Sprite).color = this.readyForCollectNodeColor;
              this.collectMiningNode.getComponent(ButtonFeedbacks).useClickTween = true;
            }
          }
        };
        return MiningCollectController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "miningTimer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "miningSpeedLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "collectMiningNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "miningSpeedPostfix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ' sem/h';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "readyForCollectNodeColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notReadyForCollectNodeColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlidePopup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Component, SlidePopup;
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
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      SlidePopup = module.SlidePopup;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "56c44+jaTFNdKqXolyNCJjK", "PopupManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupManager = exports('PopupManager', (_dec = ccclass('PopupManager'), _dec2 = property([Node]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupManager, _Component);
        function PopupManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popups", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopupManager.prototype;
        _proto.onLoad = function onLoad() {
          if (PopupManager.instance) {
            this.destroy();
            return;
          }
          PopupManager.instance = this;
          this.node.addComponent(UITransform);
        };
        PopupManager.getInstance = function getInstance() {
          return PopupManager.instance;
        };
        _proto.showPopup = function showPopup(index) {
          if (index < 0 || index >= this.popups.length) {
            console.warn('Popup index out of bounds');
            return;
          }
          var popupComponent = this.popups[index].getComponent(SlidePopup);
          if (popupComponent) {
            popupComponent.show();
          } else {
            console.warn('SlidePopup component not found on node:', this.popups[index].name);
          }
        };
        _proto.hidePopup = function hidePopup(index) {
          if (index < 0 || index >= this.popups.length) {
            console.warn('Popup index out of bounds');
            return;
          }
          var popupComponent = this.popups[index].getComponent(SlidePopup);
          if (popupComponent) {
            popupComponent.hide();
          } else {
            console.warn('SlidePopup component not found on node:', this.popups[index].name);
          }
        };
        _proto.switchPopup = function switchPopup(currentIndex, nextIndex) {
          this.hidePopup(currentIndex);
          this.showPopup(nextIndex);
        };
        return PopupManager;
      }(Component), _class3.instance = void 0, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "popups", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotatableUITransform.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, UITransform, Vec3, Component;
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
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "61c438tzKROxpZLE413yspT", "RotatableUITransform", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RotationDirection = /*#__PURE__*/function (RotationDirection) {
        RotationDirection[RotationDirection["CLOCKWISE"] = 1] = "CLOCKWISE";
        RotationDirection[RotationDirection["COUNTERCLOCKWISE"] = -1] = "COUNTERCLOCKWISE";
        return RotationDirection;
      }(RotationDirection || {});
      var RotatableUITransform = exports('RotatableUITransform', (_dec = ccclass('RotateUITransform'), _dec2 = property({
        type: Enum(RotationDirection),
        tooltip: "Pick side for rotating"
      }), _dec3 = property({
        tooltip: "Speed of rotating"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotatableUITransform, _Component);
        function RotatableUITransform() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "direction", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotationSpeed", _descriptor2, _assertThisInitialized(_this));
          _this._uiTransform = null;
          return _this;
        }
        var _proto = RotatableUITransform.prototype;
        _proto.start = function start() {
          this._uiTransform = this.node.getComponent(UITransform);
        };
        _proto.update = function update(deltaTime) {
          if (this._uiTransform) {
            var angle = this.rotationSpeed * deltaTime * this.direction;
            var currentRotation = this.node.eulerAngles;
            var newRotation = new Vec3(currentRotation.x, currentRotation.y, currentRotation.z + angle);
            this.node.eulerAngles = newRotation;
          }
        };
        return RotatableUITransform;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RotationDirection.CLOCKWISE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotationSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServerCommunicator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "accd3tgHFxBdLuM/Z0TKM6d", "ServerCommunicator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ServerCommunicator = exports('ServerCommunicator', (_dec = ccclass('ServerCommunicator'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ServerCommunicator, _Component);
        function ServerCommunicator() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = ServerCommunicator.prototype;
        _proto.onLoad = function onLoad() {
          if (ServerCommunicator._instance) {
            console.warn("ServerCommunicator instance already exists!");
            this.destroy();
            return;
          }
          ServerCommunicator._instance = this;
        };
        _proto.sendGetRequest = /*#__PURE__*/function () {
          var _sendGetRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
            var url, response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  url = "https://hmshtlser.online/" + endpoint;
                  _context.next = 3;
                  return fetch(url, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                case 3:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 6;
                    break;
                  }
                  throw new Error("HTTP error! status: " + response.status);
                case 6:
                  _context.next = 8;
                  return response.json();
                case 8:
                  return _context.abrupt("return", _context.sent);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function sendGetRequest(_x) {
            return _sendGetRequest.apply(this, arguments);
          }
          return sendGetRequest;
        }();
        _proto.sendPostRequest = /*#__PURE__*/function () {
          var _sendPostRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint) {
            var url, response;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  url = "https://hmshtlser.online/" + endpoint;
                  _context2.next = 3;
                  return fetch(url, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                case 3:
                  response = _context2.sent;
                  if (response.ok) {
                    _context2.next = 6;
                    break;
                  }
                  throw new Error("HTTP error! status: " + response.status);
                case 6:
                  _context2.next = 8;
                  return response.json();
                case 8:
                  return _context2.abrupt("return", _context2.sent);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function sendPostRequest(_x2) {
            return _sendPostRequest.apply(this, arguments);
          }
          return sendPostRequest;
        }();
        _createClass(ServerCommunicator, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error("ServerCommunicator instance is not initialized!");
            }
            return this._instance;
          }
        }]);
        return ServerCommunicator;
      }(Component), _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
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

System.register("chunks:///_virtual/SuitcaseItemsController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TimerLabel.ts', './ServerCommunicator.ts', './LoadingHider.ts', './UserDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, Node, Color, UITransform, Component, TimerLabel, ServerCommunicator, LoadingHider, UserDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      Color = module.Color;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      TimerLabel = module.TimerLabel;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }, function (module) {
      LoadingHider = module.LoadingHider;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _dec3, _dec4, _class4, _class5, _descriptor3, _dec5, _dec6, _dec7, _class7, _class8, _descriptor4, _descriptor5, _descriptor6, _dec8, _dec9, _class10, _class11, _descriptor7, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class13, _class14, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "1d664p+YMFEKo1NWdMTWkdy", "SuitcaseItemsController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SuitcaseItemData = (_dec = ccclass('SuitcaseItemData'), _dec2 = property(Sprite), _dec(_class = (_class2 = function SuitcaseItemData() {
        _initializerDefineProperty(this, "itemName", _descriptor, this);
        _initializerDefineProperty(this, "itemSprite", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);
      var SuitcaseItems = (_dec3 = ccclass('SuitcaseItems'), _dec4 = property([SuitcaseItemData]), _dec3(_class4 = (_class5 = function SuitcaseItems() {
        _initializerDefineProperty(this, "itemDatas", _descriptor3, this);
      }, _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "itemDatas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4);
      var SuitcaseData = (_dec5 = ccclass('SuitcaseData'), _dec6 = property(Node), _dec7 = property(SuitcaseItems), _dec5(_class7 = (_class8 = function SuitcaseData() {
        _initializerDefineProperty(this, "suitcaseId", _descriptor4, this);
        _initializerDefineProperty(this, "suitcaseNode", _descriptor5, this);
        _initializerDefineProperty(this, "items", _descriptor6, this);
      }, (_descriptor4 = _applyDecoratedDescriptor(_class8.prototype, "suitcaseId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "suitcaseNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "items", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SuitcaseItems();
        }
      })), _class8)) || _class7);
      var Suitcases = (_dec8 = ccclass('Suitcases'), _dec9 = property([SuitcaseData]), _dec8(_class10 = (_class11 = function Suitcases() {
        _initializerDefineProperty(this, "suitcasesDatas", _descriptor7, this);
      }, _descriptor7 = _applyDecoratedDescriptor(_class11.prototype, "suitcasesDatas", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class11)) || _class10);
      var SuitcaseItemsController = exports('SuitcaseItemsController', (_dec10 = ccclass('SuitcaseItemsController'), _dec11 = property(Suitcases), _dec12 = property({
        type: Color
      }), _dec13 = property({
        type: Color
      }), _dec14 = property(Sprite), _dec15 = property(TimerLabel), _dec16 = property(LoadingHider), _dec17 = property(LoadingHider), _dec18 = property(Node), _dec10(_class13 = (_class14 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SuitcaseItemsController, _Component);
        function SuitcaseItemsController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "suitcases", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notCollectedColor", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "collectedColor", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentMiningItemSprite", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miningItemTimerLabel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingHiderSuitcase", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingHiderCurrentItem", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "allSuitcasesPackedNode", _descriptor15, _assertThisInitialized(_this));
          _this.currentAllItems = [];
          _this.currentMiningItems = [];
          _this.currentItems = [];
          _this.currentSuitcases = [];
          _this._currentMiningItem = void 0;
          _this._currentUserMiningSuitcaseItemInfo = void 0;
          return _this;
        }
        var _proto = SuitcaseItemsController.prototype;
        _proto.start = function start() {
          this.init();
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  _context.next = 7;
                  return this.setCurrentSuitcase();
                case 7:
                  _context.next = 9;
                  return this.setItemsColors();
                case 9:
                  this.currentMiningItemSprite.node.on(Node.EventType.TOUCH_END, this.onClickCurrentMiningItemSprite, this);
                case 10:
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
        _proto.onClickCurrentMiningItemSprite = /*#__PURE__*/function () {
          var _onClickCurrentMiningItemSprite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this._currentMiningItem && !this._currentUserMiningSuitcaseItemInfo)) {
                    _context2.next = 3;
                    break;
                  }
                  console.log('Nothing In Mining');
                  return _context2.abrupt("return");
                case 3:
                  if (!this.miningItemTimerLabel.isTimerActive) {
                    this.tryCollectCurrentMiningItem();
                  }
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onClickCurrentMiningItemSprite() {
            return _onClickCurrentMiningItemSprite.apply(this, arguments);
          }
          return onClickCurrentMiningItemSprite;
        }();
        _proto.tryCollectCurrentMiningItem = /*#__PURE__*/function () {
          var _tryCollectCurrentMiningItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.collectMinedItem();
                case 2:
                  _context3.next = 4;
                  return this.setCurrentSuitcase(true);
                case 4:
                  _context3.next = 6;
                  return this.setItemsColors(true);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function tryCollectCurrentMiningItem() {
            return _tryCollectCurrentMiningItem.apply(this, arguments);
          }
          return tryCollectCurrentMiningItem;
        }();
        _proto.setCurrentSuitcase = /*#__PURE__*/function () {
          var _setCurrentSuitcase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(withForceUpdate) {
            var currentSuitcaseIndex;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (withForceUpdate === void 0) {
                    withForceUpdate = false;
                  }
                  if (this.loadingHiderSuitcase) {
                    this.loadingHiderSuitcase.show();
                  }
                  if (this.loadingHiderCurrentItem) {
                    this.loadingHiderCurrentItem.show();
                  }
                  if (this.suitcases && this.suitcases.suitcasesDatas.length > 0) {
                    this.suitcases.suitcasesDatas.forEach(function (value) {
                      if (value.suitcaseNode) {
                        value.suitcaseNode.active = false;
                      } else {
                        console.error("suitcaseNode not inited with ID: " + value.suitcaseId);
                      }
                    });
                  } else {
                    console.error("Array suitcasesDatas empty.");
                  }
                  _context4.next = 6;
                  return this.getCurrentSuitcaseIndex(withForceUpdate);
                case 6:
                  currentSuitcaseIndex = _context4.sent;
                  if (currentSuitcaseIndex) {
                    _context4.next = 12;
                    break;
                  }
                  console.log("ALL SUITCASES FILLED!");
                  if (this.allSuitcasesPackedNode) {
                    this.allSuitcasesPackedNode.active = true;
                  }
                  if (this.loadingHiderCurrentItem) {
                    this.loadingHiderCurrentItem.node.active = false;
                  }
                  return _context4.abrupt("return");
                case 12:
                  if (currentSuitcaseIndex !== null && currentSuitcaseIndex >= 0 && this.suitcases.suitcasesDatas[currentSuitcaseIndex]) {
                    if (this.suitcases.suitcasesDatas[currentSuitcaseIndex].suitcaseNode) {
                      this.suitcases.suitcasesDatas[currentSuitcaseIndex].suitcaseNode.active = true;
                      console.log('Suitcase inited');
                    } else {
                      console.error("suitcaseNode not inited with ID: " + this.suitcases.suitcasesDatas[currentSuitcaseIndex].suitcaseId);
                    }
                  } else {
                    console.log('Not founded');
                  }
                case 13:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function setCurrentSuitcase(_x) {
            return _setCurrentSuitcase.apply(this, arguments);
          }
          return setCurrentSuitcase;
        }();
        _proto.setItemsColors = /*#__PURE__*/function () {
          var _setItemsColors = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(withForceUpdate) {
            var _this2 = this;
            var currentSuitcaseIndex, allItems, currentUserSuitcaseItems, currentMiningUserItems, _loop, _ret, _iterator, _step;
            return _regeneratorRuntime().wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (withForceUpdate === void 0) {
                    withForceUpdate = false;
                  }
                  _context6.next = 3;
                  return this.getCurrentSuitcaseIndex(withForceUpdate);
                case 3:
                  currentSuitcaseIndex = _context6.sent;
                  if (currentSuitcaseIndex) {
                    _context6.next = 9;
                    break;
                  }
                  console.log("ALL SUITCASES FILLED!");
                  if (this.allSuitcasesPackedNode) {
                    this.allSuitcasesPackedNode.active = true;
                  }
                  if (this.loadingHiderCurrentItem) {
                    this.loadingHiderCurrentItem.node.active = false;
                  }
                  return _context6.abrupt("return");
                case 9:
                  if (currentSuitcaseIndex !== null && currentSuitcaseIndex >= 0) {
                    this.suitcases.suitcasesDatas[currentSuitcaseIndex].items.itemDatas.forEach(function (value) {
                      if (value.itemSprite) {
                        value.itemSprite.color = _this2.notCollectedColor;
                      } else {
                        console.error("itemSprite not inited for: " + value.itemName);
                      }
                    });
                  } else {
                    console.log("Not founded");
                  }
                  _context6.next = 12;
                  return this.getAllItems(withForceUpdate);
                case 12:
                  allItems = _context6.sent;
                  _context6.next = 15;
                  return this.getCurrentUserSuitcaseItems(withForceUpdate);
                case 15:
                  currentUserSuitcaseItems = _context6.sent;
                  _context6.next = 18;
                  return this.getCurrentMiningUserSuitcaseItems(withForceUpdate);
                case 18:
                  currentMiningUserItems = _context6.sent;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var value, suitcaseItemDataName, suitcaseItemInfo, suitcaseUserItemInfo, currentUserMiningItem;
                    return _regeneratorRuntime().wrap(function _loop$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          value = _step.value;
                          suitcaseItemDataName = value.itemName;
                          if (suitcaseItemDataName) {
                            _context5.next = 5;
                            break;
                          }
                          console.error('Not founded suitcaseItemDataName');
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 5:
                          if (!(allItems.length === 0)) {
                            _context5.next = 7;
                            break;
                          }
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 7:
                          suitcaseItemInfo = allItems.find(function (item) {
                            return item.name === suitcaseItemDataName;
                          });
                          if (suitcaseItemInfo) {
                            _context5.next = 11;
                            break;
                          }
                          console.warn('Not founded suitcaseItemInfo');
                          return _context5.abrupt("return", 0);
                        case 11:
                          if (!(currentUserSuitcaseItems.length === 0)) {
                            _context5.next = 13;
                            break;
                          }
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 13:
                          suitcaseUserItemInfo = currentUserSuitcaseItems.find(function (item) {
                            return item.itemId === suitcaseItemInfo.id;
                          });
                          if (suitcaseUserItemInfo) {
                            _context5.next = 17;
                            break;
                          }
                          console.error('Not founded suitcaseUserItemInfo');
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 17:
                          if (!(currentMiningUserItems.length === 0)) {
                            _context5.next = 19;
                            break;
                          }
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 19:
                          currentUserMiningItem = currentMiningUserItems.find(function (item) {
                            return item.itemId === suitcaseItemInfo.id;
                          });
                          if (currentUserMiningItem) {
                            _context5.next = 23;
                            break;
                          }
                          console.log('Not founded currentUserMiningItem');
                          return _context5.abrupt("return", 0);
                        case 23:
                          if (suitcaseUserItemInfo.status == 'collected') {
                            value.itemSprite.color = _this2.collectedColor;
                          } else if (suitcaseUserItemInfo.status == 'mining') {
                            _this2.updateCurrentMiningItem(value.itemSprite.spriteFrame, suitcaseItemInfo, currentUserMiningItem);
                            _this2._currentUserMiningSuitcaseItemInfo = currentUserMiningItem;
                            _this2._currentMiningItem = suitcaseItemInfo;
                          }
                          if (_this2.loadingHiderSuitcase) {
                            _this2.loadingHiderSuitcase.hide();
                          }
                        case 25:
                        case "end":
                          return _context5.stop();
                      }
                    }, _loop);
                  });
                  _iterator = _createForOfIteratorHelperLoose(this.suitcases.suitcasesDatas[currentSuitcaseIndex].items.itemDatas);
                case 21:
                  if ((_step = _iterator()).done) {
                    _context6.next = 30;
                    break;
                  }
                  return _context6.delegateYield(_loop(), "t0", 23);
                case 23:
                  _ret = _context6.t0;
                  if (!(_ret === 0)) {
                    _context6.next = 26;
                    break;
                  }
                  return _context6.abrupt("continue", 28);
                case 26:
                  if (!_ret) {
                    _context6.next = 28;
                    break;
                  }
                  return _context6.abrupt("return", _ret.v);
                case 28:
                  _context6.next = 21;
                  break;
                case 30:
                case "end":
                  return _context6.stop();
              }
            }, _callee5, this);
          }));
          function setItemsColors(_x2) {
            return _setItemsColors.apply(this, arguments);
          }
          return setItemsColors;
        }();
        _proto.updateCurrentMiningItem = function updateCurrentMiningItem(spriteFrame, suitcaseItemInfo, userMiningItem) {
          if (!spriteFrame || !suitcaseItemInfo || !userMiningItem) {
            console.error('Not found spriteFrame or suitcaseItemInfo or userMiningItem');
            return;
          }
          if (this.currentMiningItemSprite) {
            this.currentMiningItemSprite.spriteFrame = spriteFrame;
            var node = this.currentMiningItemSprite.node;
            var sprite = this.currentMiningItemSprite;
            sprite.sizeMode = Sprite.SizeMode.RAW;
            var originalWidth = spriteFrame.width;
            var originalHeight = spriteFrame.height;
            var nodeTransform = node.getComponent(UITransform);
            var parentTransform = node.parent.getComponent(UITransform);
            var maxWidth = parentTransform.width;
            var maxHeight = parentTransform.height;
            var scaleX = maxWidth / originalWidth;
            var scaleY = maxHeight / originalHeight;
            var scale = Math.min(scaleX, scaleY);
            nodeTransform.width = originalWidth * scale;
            nodeTransform.height = originalHeight * scale;
          }
          if (this.miningItemTimerLabel) {
            this.miningItemTimerLabel.init(userMiningItem.dataStartMiningItem, suitcaseItemInfo.collectionDuration);
          }
          if (this.loadingHiderCurrentItem) {
            this.loadingHiderCurrentItem.hide();
          }
        };
        _proto.getAllItems = /*#__PURE__*/function () {
          var _getAllItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(forceUpdate) {
            var response, allItems;
            return _regeneratorRuntime().wrap(function _callee6$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentAllItems.length <= 0 || forceUpdate)) {
                    _context7.next = 14;
                    break;
                  }
                  _context7.prev = 2;
                  _context7.next = 5;
                  return ServerCommunicator.instance.sendGetRequest('get_all_items');
                case 5:
                  response = _context7.sent;
                  allItems = response;
                  this.currentAllItems = [];
                  this.currentAllItems = allItems.map(function (item) {
                    return {
                      id: item[0],
                      name: item[1],
                      collectionDuration: item[2],
                      price: item[3],
                      chance: item[4],
                      suitcaseTypeId: item[5]
                    };
                  });
                  _context7.next = 14;
                  break;
                case 11:
                  _context7.prev = 11;
                  _context7.t0 = _context7["catch"](2);
                  console.error('Error fetching items:', _context7.t0);
                case 14:
                  return _context7.abrupt("return", this.currentAllItems);
                case 15:
                case "end":
                  return _context7.stop();
              }
            }, _callee6, this, [[2, 11]]);
          }));
          function getAllItems(_x3) {
            return _getAllItems.apply(this, arguments);
          }
          return getAllItems;
        }();
        _proto.getCurrentUserSuitcaseItems = /*#__PURE__*/function () {
          var _getCurrentUserSuitcaseItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(forceUpdate) {
            var userId, response, items;
            return _regeneratorRuntime().wrap(function _callee7$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentItems.length <= 0 || forceUpdate)) {
                    _context8.next = 15;
                    break;
                  }
                  _context8.prev = 2;
                  userId = UserDataManager.instance.getUserId();
                  _context8.next = 6;
                  return ServerCommunicator.instance.sendGetRequest('get_user_suitcase_items?user_id=' + userId);
                case 6:
                  response = _context8.sent;
                  items = response;
                  this.currentItems = [];
                  this.currentItems = items.map(function (item) {
                    return {
                      id: item[0],
                      userId: item[1],
                      suitcaseId: item[2],
                      itemId: item[3],
                      status: item[4]
                    };
                  });
                  _context8.next = 15;
                  break;
                case 12:
                  _context8.prev = 12;
                  _context8.t0 = _context8["catch"](2);
                  console.error('Error fetching items:', _context8.t0);
                case 15:
                  return _context8.abrupt("return", this.currentItems);
                case 16:
                case "end":
                  return _context8.stop();
              }
            }, _callee7, this, [[2, 12]]);
          }));
          function getCurrentUserSuitcaseItems(_x4) {
            return _getCurrentUserSuitcaseItems.apply(this, arguments);
          }
          return getCurrentUserSuitcaseItems;
        }();
        _proto.getCurrentMiningUserSuitcaseItems = /*#__PURE__*/function () {
          var _getCurrentMiningUserSuitcaseItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(forceUpdate) {
            var userId, response, miningItemsRawArrays, miningItems;
            return _regeneratorRuntime().wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentMiningItems.length <= 0 || forceUpdate)) {
                    _context9.next = 19;
                    break;
                  }
                  _context9.prev = 2;
                  userId = UserDataManager.instance.getUserId();
                  _context9.next = 6;
                  return ServerCommunicator.instance.sendGetRequest('get_all_user_mining_items?user_id=' + userId);
                case 6:
                  response = _context9.sent;
                  miningItemsRawArrays = response;
                  if (!(miningItemsRawArrays.length <= 0)) {
                    _context9.next = 11;
                    break;
                  }
                  console.log('ALL ITEMS COLLECTED!');
                  return _context9.abrupt("return");
                case 11:
                  miningItems = response;
                  this.currentMiningItems = [];
                  this.currentMiningItems = miningItems.map(function (item) {
                    return {
                      id: item[0],
                      dataStartMiningItem: item[1],
                      userId: item[2],
                      itemId: item[3],
                      isFinished: item[4]
                    };
                  });
                  _context9.next = 19;
                  break;
                case 16:
                  _context9.prev = 16;
                  _context9.t0 = _context9["catch"](2);
                  console.error('Error fetching items:', _context9.t0);
                case 19:
                  return _context9.abrupt("return", this.currentMiningItems);
                case 20:
                case "end":
                  return _context9.stop();
              }
            }, _callee8, this, [[2, 16]]);
          }));
          function getCurrentMiningUserSuitcaseItems(_x5) {
            return _getCurrentMiningUserSuitcaseItems.apply(this, arguments);
          }
          return getCurrentMiningUserSuitcaseItems;
        }();
        _proto.getCurrentSuitcaseIndex = /*#__PURE__*/function () {
          var _getCurrentSuitcaseIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(forceUpdate) {
            var userId, response, userSuitcases, incompleteSuitcase;
            return _regeneratorRuntime().wrap(function _callee9$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentSuitcases.length <= 0 || forceUpdate)) {
                    _context10.next = 16;
                    break;
                  }
                  _context10.prev = 2;
                  userId = UserDataManager.instance.getUserId();
                  _context10.next = 6;
                  return ServerCommunicator.instance.sendGetRequest('get_all_user_suitcases?user_id=' + userId);
                case 6:
                  response = _context10.sent;
                  userSuitcases = response;
                  this.currentSuitcases = [];
                  this.currentSuitcases = userSuitcases.map(function (item) {
                    return {
                      id: item[0],
                      userId: item[1],
                      suitcaseTypeId: item[2],
                      isComplete: item[3]
                    };
                  });
                  _context10.next = 16;
                  break;
                case 12:
                  _context10.prev = 12;
                  _context10.t0 = _context10["catch"](2);
                  console.error('Error fetching items:', _context10.t0);
                  return _context10.abrupt("return", null);
                case 16:
                  incompleteSuitcase = this.currentSuitcases.find(function (suitcase) {
                    return suitcase.isComplete === 0;
                  });
                  return _context10.abrupt("return", incompleteSuitcase ? incompleteSuitcase.suitcaseTypeId - 1 : null);
                case 18:
                case "end":
                  return _context10.stop();
              }
            }, _callee9, this, [[2, 12]]);
          }));
          function getCurrentSuitcaseIndex(_x6) {
            return _getCurrentSuitcaseIndex.apply(this, arguments);
          }
          return getCurrentSuitcaseIndex;
        }();
        _proto.collectMinedItem = /*#__PURE__*/function () {
          var _collectMinedItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var userId;
            return _regeneratorRuntime().wrap(function _callee10$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.prev = 0;
                  userId = UserDataManager.instance.getUserId();
                  _context11.next = 4;
                  return ServerCommunicator.instance.sendGetRequest('collect_mined_item?user_id=' + userId);
                case 4:
                  return _context11.abrupt("return", true);
                case 7:
                  _context11.prev = 7;
                  _context11.t0 = _context11["catch"](0);
                  console.error('Error  collecting items:', _context11.t0);
                  return _context11.abrupt("return", null);
                case 11:
                case "end":
                  return _context11.stop();
              }
            }, _callee10, null, [[0, 7]]);
          }));
          function collectMinedItem() {
            return _collectMinedItem.apply(this, arguments);
          }
          return collectMinedItem;
        }();
        return SuitcaseItemsController;
      }(Component), (_descriptor8 = _applyDecoratedDescriptor(_class14.prototype, "suitcases", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Suitcases();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class14.prototype, "notCollectedColor", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class14.prototype, "collectedColor", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 255, 0);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class14.prototype, "currentMiningItemSprite", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class14.prototype, "miningItemTimerLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class14.prototype, "loadingHiderSuitcase", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "loadingHiderCurrentItem", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "allSuitcasesPackedNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class14)) || _class13));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts', './ButtonFeedbacks.ts', './PopupManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Button, Sprite, SpriteFrame, Component, TelegramWebApp, ButtonFeedbacks, PopupManager;
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
      Button = module.Button;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }, function (module) {
      ButtonFeedbacks = module.ButtonFeedbacks;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "16834gY+L5A5rZb5lxvMF3Q", "TaskItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TaskType = exports('TaskType', /*#__PURE__*/function (TaskType) {
        TaskType["Other"] = "Other";
        TaskType["GoTo"] = "GoTo";
        TaskType["Subscribe"] = "Subscribe";
        TaskType["MoneyCount"] = "MoneyCount";
        TaskType["FriendsCount"] = "FriendsCount";
        return TaskType;
      }({}));
      var TaskItem = exports('TaskItem', (_dec = ccclass('TaskItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Sprite), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(Sprite), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaskItem, _Component);
        function TaskItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nameLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rewardLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonIconSprite", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isCompletedIcon", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isNotCompletedIcon", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSprite", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subscribeIcon", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moneyIcon", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "friendsIcon", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "otherIcon", _descriptor11, _assertThisInitialized(_this));
          _this.myTaskData = void 0;
          return _this;
        }
        var _proto = TaskItem.prototype;
        _proto.init = function init(task) {
          this.myTaskData = task;
          this.updateMe();
        };
        _proto.updateTaskData = function updateTaskData(newTaskData) {
          this.myTaskData = newTaskData;
          this.updateMe();
        };
        _proto.updateMe = function updateMe() {
          if (this.nameLabel) {
            this.nameLabel.string = this.myTaskData.taskName;
          }
          if (this.rewardLabel) {
            this.rewardLabel.string = "+" + this.myTaskData.reward.toString();
          }
          if (this.iconSprite && this.otherIcon && this.subscribeIcon && this.moneyIcon && this.friendsIcon) {
            switch (this.myTaskData.taskType) {
              case TaskType.GoTo:
              case TaskType.Other:
                this.iconSprite.spriteFrame = this.otherIcon;
                break;
              case TaskType.Subscribe:
                this.iconSprite.spriteFrame = this.subscribeIcon;
                break;
              case TaskType.MoneyCount:
                this.iconSprite.spriteFrame = this.moneyIcon;
                break;
              case TaskType.FriendsCount:
                this.iconSprite.spriteFrame = this.friendsIcon;
                break;
              default:
                console.log("Unknown task type");
                break;
            }
          }
          if (this.goButton && this.buttonIconSprite) {
            if (this.myTaskData.isCompleted) {
              if (this.isCompletedIcon) {
                this.buttonIconSprite.spriteFrame = this.isCompletedIcon;
              }
              if (this.goButton.getComponent(ButtonFeedbacks)) {
                this.goButton.getComponent(ButtonFeedbacks).enabled = false;
              }
              this.goButton.interactable = false;
            } else {
              if (this.isNotCompletedIcon) {
                this.buttonIconSprite.spriteFrame = this.isNotCompletedIcon;
              }
              if (this.goButton.getComponent(ButtonFeedbacks)) {
                this.goButton.getComponent(ButtonFeedbacks).enabled = true;
              }
              this.goButton.interactable = true;
            }
            this.goButton.node.off('click');
            this.goButton.node.on('click', this.onTaskButtonClicked, this);
          }
        };
        _proto.onTaskButtonClicked = /*#__PURE__*/function () {
          var _onTaskButtonClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var isNowCompleted;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.myTaskData.isCompleted) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _context.next = 4;
                  return this.checkTaskIsComplitedNow();
                case 4:
                  isNowCompleted = _context.sent;
                  if (isNowCompleted) {
                    this.myTaskData.isCompleted = true;
                    this.updateTaskData(this.myTaskData);
                  } else {
                    this.goToCompleteTask();
                  }
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onTaskButtonClicked() {
            return _onTaskButtonClicked.apply(this, arguments);
          }
          return onTaskButtonClicked;
        }();
        _proto.checkTaskIsComplitedNow = /*#__PURE__*/function () {
          var _checkTaskIsComplitedNow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var isNowCompleted;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  isNowCompleted = false;
                  _context2.t0 = this.myTaskData.taskType;
                  _context2.next = _context2.t0 === TaskType.GoTo ? 4 : _context2.t0 === TaskType.Other ? 4 : _context2.t0 === TaskType.Subscribe ? 8 : _context2.t0 === TaskType.MoneyCount ? 12 : _context2.t0 === TaskType.FriendsCount ? 16 : 20;
                  break;
                case 4:
                  _context2.next = 6;
                  return this.checkOtherIsComplited();
                case 6:
                  isNowCompleted = _context2.sent;
                  return _context2.abrupt("break", 22);
                case 8:
                  _context2.next = 10;
                  return this.checkSubscribeIsComplited();
                case 10:
                  isNowCompleted = _context2.sent;
                  return _context2.abrupt("break", 22);
                case 12:
                  _context2.next = 14;
                  return this.checkMoneyIsComplited();
                case 14:
                  isNowCompleted = _context2.sent;
                  return _context2.abrupt("break", 22);
                case 16:
                  _context2.next = 18;
                  return this.checkFriendsIsComplited();
                case 18:
                  isNowCompleted = _context2.sent;
                  return _context2.abrupt("break", 22);
                case 20:
                  console.log("Unknown task type");
                  return _context2.abrupt("break", 22);
                case 22:
                  return _context2.abrupt("return", isNowCompleted);
                case 23:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function checkTaskIsComplitedNow() {
            return _checkTaskIsComplitedNow.apply(this, arguments);
          }
          return checkTaskIsComplitedNow;
        }();
        _proto.goToCompleteTask = /*#__PURE__*/function () {
          var _goToCompleteTask = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = this.myTaskData.taskType;
                  _context3.next = _context3.t0 === TaskType.GoTo ? 3 : _context3.t0 === TaskType.Other ? 3 : _context3.t0 === TaskType.Subscribe ? 6 : _context3.t0 === TaskType.MoneyCount ? 9 : _context3.t0 === TaskType.FriendsCount ? 11 : 13;
                  break;
                case 3:
                  _context3.next = 5;
                  return this.goOtherComplete();
                case 5:
                  return _context3.abrupt("break", 15);
                case 6:
                  _context3.next = 8;
                  return this.goSubscribeComplete();
                case 8:
                  return _context3.abrupt("break", 15);
                case 9:
                  this.goMoneyComplete();
                  return _context3.abrupt("break", 15);
                case 11:
                  this.goFriendsComplete();
                  return _context3.abrupt("break", 15);
                case 13:
                  console.log("Unknown task type");
                  return _context3.abrupt("break", 15);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function goToCompleteTask() {
            return _goToCompleteTask.apply(this, arguments);
          }
          return goToCompleteTask;
        }() //for test only
        ;

        _proto.delay = /*#__PURE__*/
        function () {
          var _delay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ms) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve) {
                    return setTimeout(resolve, ms);
                  }));
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function delay(_x) {
            return _delay.apply(this, arguments);
          }
          return delay;
        }();
        _proto.checkOtherIsComplited = /*#__PURE__*/function () {
          var _checkOtherIsComplited = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.delay(200);
                case 2:
                  return _context5.abrupt("return", false);
                case 3:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function checkOtherIsComplited() {
            return _checkOtherIsComplited.apply(this, arguments);
          }
          return checkOtherIsComplited;
        }();
        _proto.checkSubscribeIsComplited = /*#__PURE__*/function () {
          var _checkSubscribeIsComplited = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.delay(200);
                case 2:
                  return _context6.abrupt("return", false);
                case 3:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function checkSubscribeIsComplited() {
            return _checkSubscribeIsComplited.apply(this, arguments);
          }
          return checkSubscribeIsComplited;
        }();
        _proto.checkMoneyIsComplited = /*#__PURE__*/function () {
          var _checkMoneyIsComplited = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.delay(200);
                case 2:
                  return _context7.abrupt("return", false);
                case 3:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function checkMoneyIsComplited() {
            return _checkMoneyIsComplited.apply(this, arguments);
          }
          return checkMoneyIsComplited;
        }();
        _proto.checkFriendsIsComplited = /*#__PURE__*/function () {
          var _checkFriendsIsComplited = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.delay(200);
                case 2:
                  return _context8.abrupt("return", false);
                case 3:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function checkFriendsIsComplited() {
            return _checkFriendsIsComplited.apply(this, arguments);
          }
          return checkFriendsIsComplited;
        }();
        _proto.goOtherComplete = /*#__PURE__*/function () {
          var _goOtherComplete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var tgWebApp;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context9.next = 3;
                  return tgWebApp.init();
                case 3:
                  tgWebApp.openLink(this.myTaskData.channelLink);
                case 4:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function goOtherComplete() {
            return _goOtherComplete.apply(this, arguments);
          }
          return goOtherComplete;
        }();
        _proto.goSubscribeComplete = /*#__PURE__*/function () {
          var _goSubscribeComplete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var tgWebApp;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context10.next = 3;
                  return tgWebApp.init();
                case 3:
                  tgWebApp.openTelegramLink(this.myTaskData.channelLink);
                case 4:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function goSubscribeComplete() {
            return _goSubscribeComplete.apply(this, arguments);
          }
          return goSubscribeComplete;
        }();
        _proto.goMoneyComplete = function goMoneyComplete() {
          PopupManager.getInstance().hidePopup(0);
        };
        _proto.goFriendsComplete = function goFriendsComplete() {
          PopupManager.getInstance().switchPopup(0, 3);
        };
        return TaskItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonIconSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isCompletedIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isNotCompletedIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "subscribeIcon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "moneyIcon", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "friendsIcon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "otherIcon", [_dec12], {
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

System.register("chunks:///_virtual/TasksScrollViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TaskItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Component, TaskType, TaskItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      TaskType = module.TaskType;
      TaskItem = module.TaskItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "def37DDs75PEqSD9znf/bye", "TasksScrollViewer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TasksScrollViewer = exports('TasksScrollViewer', (_dec = ccclass('TasksScrollViewer'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TasksScrollViewer, _Component);
        function TasksScrollViewer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "taskItemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentNode", _descriptor2, _assertThisInitialized(_this));
          _this.testTasks = [];
          return _this;
        }
        var _proto = TasksScrollViewer.prototype;
        _proto.start = function start() {
          //only for test
          this.testTasks = [{
            taskType: TaskType.Other,
            isCompleted: false,
            taskId: "task_001",
            taskName: "Watch the video",
            reward: 100,
            channelLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          }, {
            taskType: TaskType.Subscribe,
            isCompleted: false,
            taskId: "task_002",
            taskName: "Subscribe to channel",
            reward: 200,
            channelLink: "https://t.me/hamster_hotel"
          }, {
            taskType: TaskType.MoneyCount,
            isCompleted: false,
            taskId: "task_003",
            taskName: "Collect 5000 $SEM",
            reward: 500,
            moneyCount: 5000
          }, {
            taskType: TaskType.FriendsCount,
            isCompleted: false,
            taskId: "task_004",
            taskName: "Invite 5 friends",
            reward: 500,
            friendsCount: 5
          }];
          this.init(this.testTasks);
        };
        _proto.init = function init(tasks) {
          if (this.taskItemPrefab && this.contentNode) {
            for (var i = 0; i < tasks.length; i++) {
              var newTaskItemPrefab = instantiate(this.taskItemPrefab);
              this.contentNode.addChild(newTaskItemPrefab);
              newTaskItemPrefab.getComponent(TaskItem).init(tasks[i]);
            }
          }
        };
        return TasksScrollViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "taskItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
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
                    _context.next = 8;
                    break;
                  }
                  this.expand();
                  return _context.abrupt("return", Promise.resolve({
                    success: true
                  }));
                case 8:
                  return _context.abrupt("return", Promise.resolve({
                    success: false
                  }));
                case 9:
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
        _proto.openLink = function openLink(url) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          this._tgWebAppJS.openLink(url);
        };
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
        _proto.expand = function expand() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          if (!this._tgWebAppJS.isExpanded) {
            this._tgWebAppJS.expand();
          }
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

System.register("chunks:///_virtual/TestGetLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServerCommunicator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, ServerCommunicator;
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
      Component = module.Component;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7357eDSAhRC5p0V45vZrS5g", "TestGetLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestGetLabel = exports('TestGetLabel', (_dec = ccclass('TestGetLabel'), _dec2 = property(ServerCommunicator), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestGetLabel, _Component);
        function TestGetLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "serverCommunicator", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));
          _this.currentAllItems = [];
          return _this;
        }
        var _proto = TestGetLabel.prototype;
        _proto.start = function start() {
          this.getMetod();
        };
        _proto.getMetod = /*#__PURE__*/function () {
          var _getMetod = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response, allItems;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.serverCommunicator.sendGetRequest('get_all_items');
                case 3:
                  response = _context.sent;
                  allItems = response;
                  this.currentAllItems = allItems.map(function (item) {
                    return {
                      id: item[0],
                      name: item[1],
                      collectionDuration: item[2],
                      price: item[3],
                      chance: item[4],
                      suitcaseTypeId: item[5]
                    };
                  });
                  _context.next = 11;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  console.error('Error fetching items:', _context.t0);
                case 11:
                  this.label.string = this.currentAllItems[1].name;
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 8]]);
          }));
          function getMetod() {
            return _getMetod.apply(this, arguments);
          }
          return getMetod;
        }();
        return TestGetLabel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverCommunicator", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
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

System.register("chunks:///_virtual/TimerLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, UserDataManager;
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
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0f0bdgZInxLC7IsnEFjdw6T", "TimerLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TimerLabel = exports('TimerLabel', (_dec = ccclass('TimerLabel'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TimerLabel, _Component);
        function TimerLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "myLabel", _descriptor, _assertThisInitialized(_this));
          _this.endDate = null;
          _this.isTimerActive = false;
          _this.timeDifference = 0;
          return _this;
        }
        var _proto = TimerLabel.prototype;
        _proto.start = function start() {
          this.myLabel.string = '00:00:00:00';
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dateString, duration) {
            var startDate, DurationMs;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  startDate = new Date(dateString.replace(/-/g, "/"));
                  DurationMs = duration * 60 * 60 * 1000;
                  this.timeDifference = UserDataManager.instance.getTimeDifference();
                  if (this.timeDifference) {
                    _context.next = 11;
                    break;
                  }
                  console.error("cant get sync time from userDataManager");
                  return _context.abrupt("return");
                case 11:
                  this.endDate = new Date(startDate.getTime() + DurationMs);
                  this.isTimerActive = true;
                  this.updateLabel();
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x, _x2) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.update = function update(dt) {
          if (this.isTimerActive && this.endDate) {
            this.updateLabel();
          }
        };
        _proto.updateLabel = function updateLabel() {
          var currentTime = new Date(new Date().getTime() + this.timeDifference);
          var timeLeft = this.endDate.getTime() - currentTime.getTime();
          if (timeLeft <= 0) {
            this.myLabel.string = "00:00:00:00";
            this.isTimerActive = false;
          } else {
            this.myLabel.string = this.formatTimeLeft(timeLeft);
          }
        };
        _proto.formatTimeLeft = function formatTimeLeft(timeLeft) {
          var seconds = Math.floor(timeLeft / 1000 % 60);
          var minutes = Math.floor(timeLeft / (1000 * 60) % 60);
          var hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
          var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          function padZero(num) {
            return (num < 10 ? '0' : '') + num;
          }
          return padZero(days) + ':' + padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
        };
        return TimerLabel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "myLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserDataManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServerCommunicator.ts', './telegram-web.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, ServerCommunicator, TelegramWebApp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "c0f31uhSI5LEIE63jTEDd3D", "UserDataManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UserDataManager = exports('UserDataManager', (_dec = ccclass('UserDataManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserDataManager, _Component);
        function UserDataManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.currentUserInfo = null;
          _this.speedInfos = [];
          _this.durationInfos = [];
          _this.isTimeSyncWithServer = false;
          _this.timeDifference = null;
          return _this;
        }
        var _proto = UserDataManager.prototype;
        _proto.onLoad = function onLoad() {
          if (UserDataManager._instance) {
            console.warn("UserDataManager instance already exists!");
            this.destroy();
            return;
          }
          UserDataManager._instance = this;
          this.syncTimeWithServer();
          this.forceUpdateUserInfo();
        };
        _proto.getUserId = function getUserId() {
          if (this.currentUserInfo) {
            return this.currentUserInfo.id;
          } else {
            console.error("Error: user information is missing");
            return null;
          }
        };
        _proto.getUserName = function getUserName() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.name;
        };
        _proto.getUserPhotoUrl = function getUserPhotoUrl() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.photoUrl;
        };
        _proto.getUserBalance = function getUserBalance() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.balance;
        };
        _proto.getUserMiningStartDate = function getUserMiningStartDate() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.dateStartMining;
        };
        _proto.getUserSpeedId = function getUserSpeedId() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.speedId;
        };
        _proto.getUserDurationId = function getUserDurationId() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.durationId;
        };
        _proto.getUserInvitedBy = function getUserInvitedBy() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.invitedBy;
        };
        _proto.getUserCurrentSpeed = function getUserCurrentSpeed() {
          var _this2 = this;
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var speedInfo = this.speedInfos.find(function (info) {
            return info.id === _this2.getUserSpeedId();
          });
          return speedInfo ? speedInfo.speed : null;
        };
        _proto.getSpeedPriceById = function getSpeedPriceById(id) {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var speedInfo = this.speedInfos.find(function (info) {
            return info.id === id;
          });
          return speedInfo ? speedInfo.price : null;
        };
        _proto.getSpeedInfosCount = function getSpeedInfosCount() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.speedInfos.length;
        };
        _proto.getUserCurrentDuration = function getUserCurrentDuration() {
          var _this3 = this;
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var durationInfo = this.durationInfos.find(function (info) {
            return info.id === _this3.getUserDurationId();
          });
          return durationInfo ? durationInfo.duration : null;
        };
        _proto.getDurationPriceById = function getDurationPriceById(id) {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var durationInfo = this.durationInfos.find(function (info) {
            return info.id === id;
          });
          return durationInfo ? durationInfo.price : null;
        };
        _proto.getDurationInfosCount = function getDurationInfosCount() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.durationInfos.length;
        };
        _proto.syncTimeWithServer = /*#__PURE__*/function () {
          var _syncTimeWithServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response, serverTimeString, serverTime;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.isTimeSyncWithServer) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return ServerCommunicator.instance.sendGetRequest('get_server_time');
                case 5:
                  response = _context.sent;
                  serverTimeString = response;
                  serverTime = new Date(serverTimeString.replace(/-/g, "/"));
                  this.timeDifference = serverTime.getTime() - new Date().getTime();
                  this.isTimeSyncWithServer = true;
                  _context.next = 15;
                  break;
                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](2);
                  console.error('Error fetching server time:', _context.t0);
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 12]]);
          }));
          function syncTimeWithServer() {
            return _syncTimeWithServer.apply(this, arguments);
          }
          return syncTimeWithServer;
        }();
        _proto.getTimeDifference = function getTimeDifference() {
          if (!this.isTimeSyncWithServer) {
            return null;
          }
          return this.timeDifference;
        };
        _proto.forceUpdateUserInfo = function forceUpdateUserInfo() {
          //
          this.setUserInfoFromServer();
          //this.setSpeedInfosFromServer();
          //this.setDurationInfosFromServer();
        };

        _proto.setUserInfoFromServer = /*#__PURE__*/function () {
          var _setUserInfoFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var tgWebApp, user, initData, response;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  tgWebApp = TelegramWebApp.Instance;
                  _context2.next = 4;
                  return tgWebApp.init();
                case 4:
                  user = tgWebApp.getTelegramUser();
                  initData = tgWebApp.getTelegramWebAppInitData();
                  _context2.next = 8;
                  return ServerCommunicator.instance.sendGetRequest('get_user?id=' + user.id + '&name=' + user.username + '&referal=' + initData.start_param);
                case 8:
                  response = _context2.sent;
                  this.currentUserInfo = {
                    id: response[0],
                    name: response[1],
                    photoUrl: response[2],
                    balance: response[3],
                    dateStartMining: response[4],
                    speedId: response[5],
                    durationId: response[6],
                    invitedBy: response[7]
                  };
                  _context2.next = 15;
                  break;
                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](0);
                  console.error('Error setting user:', _context2.t0);
                case 15:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 12]]);
          }));
          function setUserInfoFromServer() {
            return _setUserInfoFromServer.apply(this, arguments);
          }
          return setUserInfoFromServer;
        }();
        _proto.setSpeedInfosFromServer = /*#__PURE__*/function () {
          var _setSpeedInfosFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var response, allSpeeds;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('get_all_speeds');
                case 3:
                  response = _context3.sent;
                  allSpeeds = response;
                  this.speedInfos = [];
                  this.speedInfos = allSpeeds.map(function (item) {
                    return {
                      id: item[0],
                      speed: item[1],
                      price: item[2]
                    };
                  });
                  _context3.next = 12;
                  break;
                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3["catch"](0);
                  console.error('Error fetching speeds:', _context3.t0);
                case 12:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 9]]);
          }));
          function setSpeedInfosFromServer() {
            return _setSpeedInfosFromServer.apply(this, arguments);
          }
          return setSpeedInfosFromServer;
        }();
        _proto.setDurationInfosFromServer = /*#__PURE__*/function () {
          var _setDurationInfosFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var response, allDurations;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('get_all_durations');
                case 3:
                  response = _context4.sent;
                  allDurations = response;
                  this.durationInfos = [];
                  this.durationInfos = allDurations.map(function (item) {
                    return {
                      id: item[0],
                      duration: item[1],
                      price: item[2]
                    };
                  });
                  _context4.next = 12;
                  break;
                case 9:
                  _context4.prev = 9;
                  _context4.t0 = _context4["catch"](0);
                  console.error('Error fetching durations:', _context4.t0);
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 9]]);
          }));
          function setDurationInfosFromServer() {
            return _setDurationInfosFromServer.apply(this, arguments);
          }
          return setDurationInfosFromServer;
        }();
        _createClass(UserDataManager, [{
          key: "isInited",
          get: function get() {
            if (this.currentUserInfo && this.speedInfos.length > 0 && this.durationInfos.length > 0 && this.isTimeSyncWithServer) {
              return true;
            }
            return false;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error("UserDataManager instance is not initialized!");
            }
            return this._instance;
          }
        }]);
        return UserDataManager;
      }(Component), _class2._instance = void 0, _class2)) || _class));
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