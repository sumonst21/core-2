/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, once) {
  var drupalOnce = once;

  function augmentedOnce(id, selector, context) {
    $(selector, context).once(id);
    return drupalOnce(id, selector, context);
  }

  function remove(id, selector, context) {
    $(selector, context).removeOnce(id);
    return drupalOnce.remove(id, selector, context);
  }

  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);