# Tellama

**Android 휴대폰에서 Ollama 호환 로컬 AI 서버를 실행하세요.**

Tellama는 Android 기기에서 GGUF 모델을 실행하고, 같은 Wi-Fi의 신뢰한 PC나 에이전트가 Ollama/OpenAI 호환 API로 모델을 사용할 수 있게 합니다. 전체 Android 앱 소스는 비공개이며, 이 저장소에는 공개 SDK·예제·호환성 테스트와 APK 릴리즈만 제공합니다.

## 빠른 시작

1. [최신 APK](https://github.com/redpluglab/tellama/releases/latest)를 설치합니다.
2. **모델**에서 기기에 맞는 GGUF 모델을 다운로드하고 서빙 모델로 선택합니다.
3. **서버**에서 API 키를 만들고 **Wi-Fi LAN**을 선택한 뒤 서버를 시작합니다.
4. 화면에 표시된 주소와 키를 환경 변수로 등록합니다.

```bash
export TELLAMA_URL="http://PHONE_IP:11434"
export TELLAMA_API_KEY="tlm_..."
```

설치된 모델 ID를 확인합니다.

```bash
curl "$TELLAMA_URL/api/tags" \
  -H "Authorization: Bearer $TELLAMA_API_KEY"
```

실제 로컬 모델에 대화를 보냅니다.

```bash
curl "$TELLAMA_URL/api/chat" \
  -H "Authorization: Bearer $TELLAMA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "API_TAGS에서_확인한_MODEL_ID",
    "messages": [{"role": "user", "content": "안녕, 휴대폰에서 답해줘"}]
  }'
```

## 공개 범위

- 공개: [`sdk/`](../sdk/)의 Python·JavaScript 클라이언트, 예제, 계약 테스트, [API 문서](API.md)
- 비공개: Android 앱 소스, 네이티브 런타임, 데이터베이스·보안 구현, 서명 자료와 내부 설정

LAN 서버는 사용자가 직접 켜야 하며 API 키가 반드시 필요합니다. Wi-Fi가 바뀌거나 끊기면 Tellama가 서버를 자동으로 중지합니다. 포트 `11434`를 인터넷에 직접 노출하거나 공유기 포트 포워딩을 설정하지 마세요.

모델 다운로드는 중단 후 재개, 저장공간 안전선, 신뢰 미러, SHA-256 및 GGUF 검증을 적용합니다. 실행 중인 모델을 삭제하면 서빙과 생성을 중지하고 네이티브 메모리를 해제한 뒤 저장공간을 회수합니다. TalkBack, 큰 글꼴, 가로 화면, 태블릿 폭과 RTL 레이아웃을 지원합니다.

v1.1.9부터 앱 시작 시 새 릴리즈를 백그라운드에서 확인하고 업데이트가 있을 때 Tellama 안에서 안내합니다. 확인 실패는 로컬 사용을 막지 않으며, APK 다운로드 후 SHA-256·패키지·버전·서명을 검증합니다.

채팅의 웹 도구는 사용자가 입력한 공개 HTTPS 페이지를 최대 3개까지 읽어 요약·비교하고 출처를 결과에 보존합니다. 웹 결과는 자동으로 장기기억에 저장되지 않으며 사용자가 직접 승인해야 합니다. 로컬 모델을 선택하면 페이지 본문은 기기 안에서 처리되고, 외부 API 모델을 선택하면 실행 전 경고 후 해당 제공업체로 전송됩니다.

SDK는 Apache-2.0이며 Tellama Android 앱과 브랜드 자산은 상용 독점 라이선스입니다. 모델은 각 배포자의 라이선스를 따릅니다.
