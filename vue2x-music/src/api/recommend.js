import jsonp from 'common/js/jsonp'
import {conmmonParams} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, conmmonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    _: 1505909876239
  })
  return jsonp(url, data)
}
