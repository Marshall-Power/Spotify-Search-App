import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ArtistCard from './ArtistCard'

test('renders content', () => {
  const artists = {
    "href": "https://api.spotify.com/v1/search?query=maca&type=artist&locale=en-GB%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=0&limit=4",
    "items": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7mUBMaZW1MXGswaneb0JTT"
            },
            "followers": {
                "href": null,
                "total": 395595
            },
            "genres": [
                "latin alternative",
                "spanish pop"
            ],
            "href": "https://api.spotify.com/v1/artists/7mUBMaZW1MXGswaneb0JTT",
            "id": "7mUBMaZW1MXGswaneb0JTT",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebefee3250a04917d78a21a6cc",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174efee3250a04917d78a21a6cc",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178efee3250a04917d78a21a6cc",
                    "width": 160
                }
            ],
            "name": "Macaco",
            "popularity": 64,
            "type": "artist",
            "uri": "spotify:artist:7mUBMaZW1MXGswaneb0JTT"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5EKIGbuC1kMehBmQoY0nzj"
            },
            "followers": {
                "href": null,
                "total": 19
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5EKIGbuC1kMehBmQoY0nzj",
            "id": "5EKIGbuC1kMehBmQoY0nzj",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebf5f52d146a5115d219f519c7",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174f5f52d146a5115d219f519c7",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178f5f52d146a5115d219f519c7",
                    "width": 160
                }
            ],
            "name": "Maca",
            "popularity": 22,
            "type": "artist",
            "uri": "spotify:artist:5EKIGbuC1kMehBmQoY0nzj"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/0kyu7H6wMPEvB8dfkozgBF"
            },
            "followers": {
                "href": null,
                "total": 19869
            },
            "genres": [
                "pop flamenco",
                "rumba"
            ],
            "href": "https://api.spotify.com/v1/artists/0kyu7H6wMPEvB8dfkozgBF",
            "id": "0kyu7H6wMPEvB8dfkozgBF",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebb13c4de23c86cdf76c01f5f6",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174b13c4de23c86cdf76c01f5f6",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178b13c4de23c86cdf76c01f5f6",
                    "width": 160
                }
            ],
            "name": "Radio Macandé",
            "popularity": 38,
            "type": "artist",
            "uri": "spotify:artist:0kyu7H6wMPEvB8dfkozgBF"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4lHAjTCvXGu8QIM3cEe93m"
            },
            "followers": {
                "href": null,
                "total": 324654
            },
            "genres": [
                "flamenco urbano",
                "urbano espanol"
            ],
            "href": "https://api.spotify.com/v1/artists/4lHAjTCvXGu8QIM3cEe93m",
            "id": "4lHAjTCvXGu8QIM3cEe93m",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb92c7a156cd2aab8c6f6b81f3",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab6761610000517492c7a156cd2aab8c6f6b81f3",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f17892c7a156cd2aab8c6f6b81f3",
                    "width": 160
                }
            ],
            "name": "Maka",
            "popularity": 66,
            "type": "artist",
            "uri": "spotify:artist:4lHAjTCvXGu8QIM3cEe93m"
        }
    ],
    "limit": 4,
    "next": "https://api.spotify.com/v1/search?query=maca&type=artist&locale=en-GB%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=4&limit=4",
    "offset": 0,
    "previous": null,
    "total": 1805
}

  render(<ArtistCard artists={artists} />)

  const title = screen.getByText('Artists')
  const element = screen.getByText('Macaco')
  const element2 = screen.getByText('Maca')
  const element3 = screen.getByText('Radio Macandé')
  const element4 = screen.getByText('Maka')
  
  expect(title).toBeDefined()
  expect(element).toBeDefined()
  expect(element2).toBeDefined()
  expect(element3).toBeDefined()
  expect(element4).toBeDefined()
})