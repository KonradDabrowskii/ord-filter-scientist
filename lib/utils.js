let inscription_regex = /<h1>Inscription (\d*)<\/h1>/

export async function fetchInscriptionNumber(id) {
  let ordinals_response = await fetch(`https://ord.ordscan.xyz/inscription/${id}`)
  if (ordinals_response.ok) {
    let ordinals_text = await ordinals_response.text()
    return inscription_regex.exec(ordinals_text)[1]
  } else {
    throw {
      message: `ord.ordscan.xyz returned error code ${ordinals_response.status} with inscription ${id}`,
      error: ordinals_response.text()
    }
  }
}