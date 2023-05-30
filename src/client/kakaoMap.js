import React, { useEffect } from "react";

const { kakao } = window;

function KakaoMap() {
    useEffect(() => {
        const mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const mapOptions = { // 지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(36.5683272, 128.7296112),
            level: 10 // 지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴
    }, []);

    return (
        <div id="map" style={{
            height: '865px', width: '100vw'
        }}></div>
    )
}

export default KakaoMap;
