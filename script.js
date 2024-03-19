document.getElementById('fortuneButton').addEventListener('click', function() {
    var fortunes = [
        "Hôm nay là một ngày tốt để học cái mới.",
        "Hãy kiên nhẫn với bản thân.",
        "Một cơ hội bất ngờ sắp đến với bạn.",
        "Hãy dành thời gian cho những người bạn yêu thương.",
        "Sự sáng tạo sẽ giúp bạn giải quyết vấn đề."
    ];
    var index = Math.floor(Math.random() * fortunes.length);
    document.getElementById('fortuneText').innerText = fortunes[index];
});
