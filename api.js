export const getVolume = async () => {
  const response = await fetch('http://volumio.local/api/v1/getState')
  const data = await response.json()
  return data.volume
}

export const setVolume = (newVolume) => {
  fetch(`http://volumio.local/api/v1/commands/?cmd=volume&volume=${newVolume}`)
}
