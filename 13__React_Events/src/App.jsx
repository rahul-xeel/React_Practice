import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <button onClick={()=>{alert("hello bro !!!")}}><h1>OPEN IT !!!</h1></button>
        <h1>onClick Event</h1>
      </center>


     <h1>React Synthetic Event</h1>

<h2>Clipboard Events</h2>
<h3>onCopy</h3>
<h3>onCut</h3>
<h3>onPaste</h3>

<h2>Composition Events</h2>
<h3>onCompositionStart</h3>
<h3>onCompositionEnd</h3>
<h3>onCompositionUpdate</h3>

<h2>Keyboard Events</h2>
<h3>onKeyDown</h3>
<h3>onKeyPress</h3>
<h3>onKeyUp</h3>

<h2>Focus Events</h2>
<h3>onFocus</h3>
<h3>onBlur</h3>

<h2>Form Events</h2>
<h3>onChange</h3>
<h3>onInput</h3>
<h3>onSubmit</h3>
<h3>onInvalid</h3>
<h3>onReset</h3>

<h2>Generic Events</h2>
<h3>onError</h3>
<h3>onLoad</h3>

<h2>Mouse Events</h2>
<h3>onClick</h3>
<h3>onContextMenu</h3>
<h3>onDoubleClick</h3>
<h3>onDrag</h3>
<h3>onDragEnd</h3>
<h3>onDragEnter</h3>
<h3>onDragExit</h3>
<h3>onDragLeave</h3>
<h3>onDragOver</h3>
<h3>onDragStart</h3>
<h3>onDrop</h3>
<h3>onMouseDown</h3>
<h3>onMouseEnter</h3>
<h3>onMouseLeave</h3>
<h3>onMouseMove</h3>
<h3>onMouseOut</h3>
<h3>onMouseOver</h3>
<h3>onMouseUp</h3>

<h2>Pointer Events</h2>
<h3>onPointerDown</h3>
<h3>onPointerMove</h3>
<h3>onPointerUp</h3>
<h3>onPointerCancel</h3>
<h3>onGotPointerCapture</h3>
<h3>onLostPointerCapture</h3>
<h3>onPointerEnter</h3>
<h3>onPointerLeave</h3>
<h3>onPointerOver</h3>
<h3>onPointerOut</h3>

<h2>Selection Events</h2>
<h3>onSelect</h3>

<h2>Touch Events</h2>
<h3>onTouchCancel</h3>
<h3>onTouchEnd</h3>
<h3>onTouchMove</h3>
<h3>onTouchStart</h3>

<h2>UI Events</h2>
<h3>onScroll</h3>

<h2>Wheel Events</h2>
<h3>onWheel</h3>

<h2>Media Events</h2>
<h3>onAbort</h3>
<h3>onCanPlay</h3>
<h3>onCanPlayThrough</h3>
<h3>onDurationChange</h3>
<h3>onEmptied</h3>
<h3>onEncrypted</h3>
<h3>onEnded</h3>
<h3>onError</h3>
<h3>onLoadedData</h3>
<h3>onLoadedMetadata</h3>
<h3>onLoadStart</h3>
<h3>onPause</h3>
<h3>onPlay</h3>
<h3>onPlaying</h3>
<h3>onProgress</h3>
<h3>onRateChange</h3>
<h3>onSeeked</h3>
<h3>onSeeking</h3>
<h3>onStalled</h3>
<h3>onSuspend</h3>
<h3>onTimeUpdate</h3>
<h3>onVolumeChange</h3>
<h3>onWaiting</h3>

<h2>Image Events</h2>
<h3>onLoad</h3>
<h3>onError</h3>

<h2>Animation Events</h2>
<h3>onAnimationStart</h3>
<h3>onAnimationEnd</h3>
<h3>onAnimationIteration</h3>

<h2>Transition Events</h2>
<h3>onTransitionEnd</h3>

<h2>Other Events</h2>
<h3>onToggle</h3>


    </>
  )
}

export default App
