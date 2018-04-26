import React from 'react'
import { Subscribe } from 'unstated'
import SoundcloudStore from '../stores/SoundcloudStore'
import UIStore from '../stores/UIStore'
import MediaPlayer from '../components/MediaPlayer'
import GifSlideshow from '../components/GifSlideshow'
import MediaControls from '../components/MediaControls'
import cn from 'classnames'

/**
 * Home page
 */

export const IndexPage = () => (
  <div className='IndexPage' style={{ height: '100%' }}>
    <div className='IndexLayout' style={{ height: '100%' }}>
      <div className='controls'>
        <MediaControls />

        <Subscribe to={[UIStore]}>
          {ui => (
            <button
              onClick={() => {
                ui.toggleSoundcloud()
              }}
            >
              Toggle
            </button>
          )}
        </Subscribe>
      </div>

      <div className='slideshow'>
        <Subscribe to={[SoundcloudStore]}>
          {soundcloud =>
            soundcloud.state.state === 'PLAYING' ||
            soundcloud.state.state === 'FINISHED' ? (
              <GifSlideshow />
            ) : null
          }
        </Subscribe>
      </div>

      <Subscribe to={[UIStore]}>
        {ui => (
          <div
            className={cn('soundcloud', {
              '-visible': ui.state.showSoundcloud
            })}
          >
            <MediaPlayer />
          </div>
        )}
      </Subscribe>
    </div>
    <style jsx>{`
      .IndexLayout {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .slideshow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .controls {
        position: absolute;
        bottom: 16px;
        left: 16px;
        z-index: 1;
      }

      .soundcloud {
        position: absolute;
        max-width: 300px;
        top: 16px;
        right: 16px;
        bottom: 16px;
        opacity: 0;
        z-index: -1;
        pointer-events: none;
      }
      }

      .soundcloud.-visible {
        opacity: 1;
        z-index: 1;
        pointer-events: auto;
      }
    `}</style>
  </div>
)

/*
 * Export
 */

export default IndexPage
