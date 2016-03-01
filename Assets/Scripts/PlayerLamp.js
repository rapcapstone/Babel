var PlayerLamp : GameObject;
var PlayerLampLight : GameObject;
var PlayerLampFlame : GameObject;
//var Lamp : GameObject;

private var State = 0;  //Lift/on = 1, Lower/off = 0

function Start () {
    //Initialize Player lamp --> off
    
    PlayerLampLight.GetComponent.<Light>().range = 0;
    PlayerLampLight.GetComponent.<Light>().intensity = 0;
        
    PlayerLampFlame.GetComponent.<ParticleSystem>().enableEmission = false;
}

function Update () {
    if (Input.GetKeyDown(KeyCode.F) && State == 0)
	{
	    PlayerLamp.GetComponent.<Animation>().Play("LiftLamp");
        State = 1;
        
        PlayerLampLight.GetComponent.<Light>().range = 4.5;
        PlayerLampLight.GetComponent.<Light>().intensity = 2.5;
        
        PlayerLampFlame.GetComponent.<ParticleSystem>().enableEmission = true;
        
        //PlayerLampLight.GetComponent.<Flame>().enabled = true;
	}
    else if(Input.GetKeyDown(KeyCode.F) && State == 1)
    {
        PlayerLamp.GetComponent.<Animation>().Play("LowerLamp");
        State = 0;
        
        PlayerLampLight.GetComponent.<Light>().range = 0;
        PlayerLampLight.GetComponent.<Light>().intensity = 0;
        
        PlayerLampFlame.GetComponent.<ParticleSystem>().enableEmission = false;
        
        //PlayerLampLight.GetComponent.<Flame>().enabled = false;
    }
    
    
    
    
    //if Lamp is 'on', then PlayerLamp is 'off'; if Lamp is 'off', then PlayerLamp is 'on'.
    /*
    if(Lamp.active == true)
    {
        PlayerLamp.active = false;
    }
    if(Lamp.active == false)
    {
       PlayerLamp.active = true;
    }
    */

    /*
    if (PlayerHasLamp == true)
	{
        PlayerLamp.active = true;
	}
    
    if (PlayerHasLamp == false)
    {
        PlayerLamp.active = false;
    }
    
    if (Lamp.active == true)
    {
        PlayerHasLamp = false;
    }
    
    if(Lamp.active == false)
    {
        PlayerHasLamp = true;
    }
    */
}