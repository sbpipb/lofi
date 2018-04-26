/* @flow */

import React from 'react'
import { Subscribe } from 'unstated'
import cn from 'classnames'
import Helmet from 'react-helmet'

import SoundcloudStore from '../stores/SoundcloudStore'
import UIStore from '../stores/UIStore'
import { MediaPlayerView } from '../components/MediaPlayer'
import GifSlideshow from '../components/GifSlideshow'
import MediaControls from '../components/MediaControls'
import PlayerHotkeys from '../components/PlayerHotkeys'

/*::
  export type ViewProps = {
    showSlideshow: boolean,
    showSoundcloud: boolean,
    soundcloudURL: string,
    dispatch: any,
    actions: any
  }

  export type Props = {
    soundcloudURL: string,
    title: string
  }
*/

/**
 * Home page
 */

export const PlayerPageView = (
  {
    showSlideshow,
    showSoundcloud,
    soundcloudURL,
    dispatch,
    actions
  } /*: ViewProps */
) => (
  <PlayerHotkeys>
    <div className='PlayerPage' style={{ height: '100%' }}>
      <div className='controls'>
        <MediaControls />
      </div>

      {showSlideshow ? (
        <div className='slideshow'>
          <GifSlideshow />
        </div>
      ) : null}

      <div
        className={cn('soundcloud', {
          '-visible': showSoundcloud
        })}
      >
        <MediaPlayerView
          url={soundcloudURL}
          dispatch={dispatch}
          actions={actions}
        />
      </div>
    </div>
    <style jsx>{`
      .PlayerPage {
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
        bottom: 32px;
        left: 32px;
        z-index: 5;
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

      .soundcloud.-visible {
        opacity: 1;
        z-index: 5;
        pointer-events: auto;
      }
    `}</style>
  </PlayerHotkeys>
)

/**
 * Connected `<PlayerPageView />`
 */

export const PlayerPage = ({ soundcloudURL, title } /*: Props */) => (
  <Subscribe to={[SoundcloudStore, UIStore]}>
    {(soundcloud, ui) => (
      <React.Fragment>
      <Helmet title={title} />
      <PlayerPageView
        showSlideshow={
          soundcloud.state.state === 'PLAYING' ||
          soundcloud.state.state === 'FINISHED'
        }
        showSoundcloud={ui.state.showSoundcloud}
        soundcloudURL={soundcloudURL}
        dispatch={soundcloud}
        actions={soundcloud.state.actions}
      />
      </React.Fragment>
    )}
  </Subscribe>
)

/*
 * Export
 */

export default PlayerPage
