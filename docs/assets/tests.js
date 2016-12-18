'use strict';

define('mgmt-by-trivia/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/components/card-container.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/card-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/card-container.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/components/editable-list.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/editable-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/editable-list.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/components/initiate-card.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/initiate-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/initiate-card.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/components/introduction-card.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/introduction-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/introduction-card.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/components/reward-card.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/reward-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/reward-card.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/components/task-card.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/task-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/task-card.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('mgmt-by-trivia/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'mgmt-by-trivia/tests/helpers/start-app', 'mgmt-by-trivia/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _mgmtByTriviaTestsHelpersStartApp, _mgmtByTriviaTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _mgmtByTriviaTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _mgmtByTriviaTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('mgmt-by-trivia/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/helpers/resolver', ['exports', 'mgmt-by-trivia/resolver', 'mgmt-by-trivia/config/environment'], function (exports, _mgmtByTriviaResolver, _mgmtByTriviaConfigEnvironment) {

  var resolver = _mgmtByTriviaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _mgmtByTriviaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mgmtByTriviaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('mgmt-by-trivia/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/helpers/start-app', ['exports', 'ember', 'mgmt-by-trivia/app', 'mgmt-by-trivia/config/environment'], function (exports, _ember, _mgmtByTriviaApp, _mgmtByTriviaConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _mgmtByTriviaConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _mgmtByTriviaApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('mgmt-by-trivia/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/routes/home.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/test-helper', ['exports', 'mgmt-by-trivia/tests/helpers/resolver', 'ember-qunit'], function (exports, _mgmtByTriviaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_mgmtByTriviaTestsHelpersResolver['default']);
});
define('mgmt-by-trivia/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('mgmt-by-trivia/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mgmt-by-trivia/tests/unit/routes/home-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('mgmt-by-trivia/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
