RegisterCommand("SSB", function()
    SendNUIMessage({
        type = 'showScoreBoard'
    })
end, false)



RegisterKeyMapping("SSB", "Show ScoreBoard", "keyboard", "DELETE")

RegisterNetEvent("updateScoreboard")
AddEventHandler("updateScoreboard", function(data)
    SendNUIMessage({
        type = "updateScoreBoard",
        playerName = data.playerName,
        playerID = data.playerID,
        playerCount = data.playerCount
    })
end, false)

