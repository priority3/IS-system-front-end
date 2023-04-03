import { requestfile } from "@/api/requestfile.js"
import {request} from "@/api/request.js"
export function createSrc(formdata) {
    return requestfile({
        method: 'POST',
        url: '/api/file/upload',
        data:formdata,
        transformRequest: [function(data, headers) {
            delete headers.post['Content-Type']
            return data
          }],
          headers:{
            'Content-Type':'multipart/form-data'
          }
    })
}

export function classifyUpload(data) {
    return request({
        method: 'POST',
        url: '/api/analysis/feature_classification',
        data,
    })
}
export function detectTargetsUpload(data) {
    return request({
        method: 'POST',
        url: '/api/analysis/object_detection',
        data,
    })
}
export function obtainTargetsUpload(data) {
    return request({
        method: 'POST',
        url: '/api/analysis/object_extraction',
        data,
    })
}
export function detectChangesUpload(data){
    return request({
        method:'POST',
        url:'/api/analysis/change_detection',
        data
    })
}

export function histogramUpload(data){
    return request({
        method:'POST',
        url:'/api/analysis/histogram_match',
        data
    })
}

export function holeHandle(data){
    return request({
        method:'POST',
        url:'api/analysis/hole',
        data
    })
}

export function prePhotoHandle(data){
    return request({
        method:'POST',
        url:'/api/analysis/image_pre',
        data
    })
}