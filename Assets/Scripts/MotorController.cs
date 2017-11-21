using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class MotorController : MonoBehaviour
{
    [SerializeField][Range(0, 1)]
    float dampeningFactor = 1;

    bool isRunning = false;
    float force = 50;

    Coroutine runCoroutine;

    void Start()
    {
        GetComponent<Rigidbody>().freezeRotation = true;
        runCoroutine = StartCoroutine(Run());
    }

    private void OnDestroy()
    {
        if (runCoroutine != null)
        {
            StopCoroutine(runCoroutine);
        }
    }

    void Update()
    {
        if (Input.anyKey)
        {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                isRunning = !isRunning;

                if (!isRunning)
                {
                    Stop();
                }
                else
                {
                    Debug.Log("Motor is on");
                }
            }
            else if (Input.GetKeyDown(KeyCode.KeypadPlus))
            {
                IncrementForce();
            }
            else if (Input.GetKeyDown(KeyCode.KeypadMinus))
            {
                DecrementForce();
            }
        }
    }

    void DecrementForce()
    {
        if (force <= -100)
        {
            force = -100;
        }
        else
        {
            force--;
        }

        Debug.Log("Motor's force is now " + force);
    }

    void IncrementForce()
    {
        if (force >= 100)
        {
            force = 100;
        }
        else
        {
            force++;
        }

        Debug.Log("Motor's force is now " + force);
    }

    void SwitchDirection()
    {
        force = -force;
    }

    IEnumerator Run()
    {
        // Toujour rouler
        while (true)
        {
            if (isRunning && dampeningFactor > 0 && force >= -100 && force <= 100)
            {
                // Trouver la direction du mouvement
                Vector3 movement = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
                movement = Vector3.Normalize(movement);

                GetComponent<Rigidbody>().AddForce(movement * force * dampeningFactor);
            }

            yield return new WaitForEndOfFrame();
        }
    }

    void Stop()
    {
        Debug.Log("Motor is off");

        GetComponent<Rigidbody>().velocity = Vector3.zero;
        GetComponent<Rigidbody>().angularVelocity = Vector3.zero;
    }
}
