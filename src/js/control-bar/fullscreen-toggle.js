import Button from '../button';

/**
 * Toggle fullscreen video
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @extends vjs.Button
 */
class FullscreenToggle extends Button {

  buildCSSClass() {
    return 'vjs-fullscreen-control ' + super.buildCSSClass();
  }

  onClick() {
    if (!this.player_.isFullscreen()) {
      this.player_.requestFullscreen();
      this.controlText_.innerHTML = this.localize('Non-Fullscreen');
    } else {
      this.player_.exitFullscreen();
      this.controlText_.innerHTML = this.localize('Fullscreen');
    }
  }

}

FullscreenToggle.prototype.buttonText = 'Fullscreen';

Button.registerComponent('FullscreenToggle', FullscreenToggle);
export default FullscreenToggle;
