import React from 'react'
import Frame from 'react-frame-component'
import classNamesBind from 'classnames/bind'
import styles from './index.scss'

const classNames = classNamesBind.bind(styles)

const DEFAULT_DEVICES = [
  { name: 'None', width: '100%', height: '100%' },
  { name: 'iPhone 5', width: 320, height: 568 },
  { name: 'iPhone 6', width: 376, height: 667 },
  { name: 'iPhone 6 Plus', width: 414, height: 736 },
  { name: 'Galaxy S5', width: 360, height: 640 },
  { name: 'Nexus 5X', width: 412, height: 732 }
]
const INITIAL_FRAME_CONTENT = `
  <!DOCTYPE html>
  <html>
    <head>${document.head.innerHTML}</head>
    <body>
      <div class="frame-root"></div>
    </body>
  </html>
`

export default class DeviceSimulator extends React.Component {
  constructor (props) {
    super(props)
    this.onDeviceClick = this.onDeviceClick.bind(this)
    this.onRotaterClick = this.onRotaterClick.bind(this)
    this.devices = this.props.devices || DEFAULT_DEVICES
    this.state = {
      device: this.props.device || this.devices[0],
      isRotated: false,
      url: null
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ url: this.props.url })
    })
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ device: nextProps.device || this.state.device })
  }
  render () {
    const className = classNames('root', {
      'is-rotated': this.state.isRotated
    })
    return (
      <div className={className}>
        {this.props.showDevices && <div className={styles.topbar}>
          {renderDeviceList(this.devices, this.state.device, this.onDeviceClick)}
          {renderDeviceRotater(this.state.device, this.onRotaterClick)}
        </div>}
        {renderContent(this.state.device, this.state.url, this.props.children)}
      </div>
    )
  }
  onDeviceClick (event) {
    event.preventDefault()
    const device = this.devices[event.target.selectedIndex]
    this.setState({ device }, () => {
      this.props.onDeviceChange(
        device
      )
    })
  }
  onRotaterClick (device, event) {
    event.preventDefault()
    setTimeout(() => {
      this.setState({
        isRotated: !this.state.isRotated,
        device: {
          ...device,
          width: device.height,
          height: device.width
        }
      })
    }, 300)
    this.setState({
      isRotated: !this.state.isRotated
    })
  }
}

DeviceSimulator.defaultProps = {
  onDeviceChange: () => {},
  showDevices: true
}

export const defaultDevices = DEFAULT_DEVICES

const renderDeviceListItem = (device = {}, key) => (
  <option
    className={styles.deviceListItem}
    key={key}>
    {device.name}
  </option>
)

const renderDeviceList = (devices = [], device, onClick) => (
  <select
    value={device.name}
    onChange={onClick}
    className={styles.deviceList}>
    {devices.map(renderDeviceListItem)}
  </select>
)

const renderDeviceRotater = (device, onClick) => (
  <button
    className={styles.deviceRotater}
    onClick={onClick.bind(null, device)}>
    Rotate
  </button>
)

const renderDeviceFrame = (device, url, children) => (
  <Frame
    initialContent={INITIAL_FRAME_CONTENT}
    style={getDeviceDimensions(device)}
    src={url}>
    {!url && children}
  </Frame>
)

const renderDevice = (device, url, children) => (
  <div
    data-width={device.width}
    data-height={device.height}
    className={styles.device}
    style={getDeviceDimensions(device)}>
    {renderDeviceFrame(device, url, children)}
  </div>
)

const renderContent = (device, url, children) => (
  <div className={styles.content}>
    {renderDevice(device, url, children)}
  </div>
)

const getDeviceDimensions = (device) => ({
  width: device.width,
  height: device.height
})
