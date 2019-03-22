from django.shortcuts import render
from .models import person
# Create your views here.
def index(request):
    alltable = person.objects
    context = {
        'countofusers':len(alltable.all()),
    }
    if 'logged' in request.session:
        context['logged'] = True
        context['name'] = alltable.get(username = request.session['username']).name
    else:
        context['logged'] = False
    return render(request,'index.html',context)
def signin(request):
    alltable = person.objects
    context = {
        'countofusers':len(alltable.all()),
    }
    if 'logged' in request.session:
        context['logged'] = True
        context['redirect'] = True
    else:
        context['logged'] = False
    if request.POST.get('check'):
        username = request.POST.get("username")
        password = request.POST.get("password")
        for i in range(0,len(alltable.all())):
            if alltable.get(id = i+1).username == username:
                if alltable.get(id = i+1).password == password:
                    request.session['logged'] = 'yes'
                    request.session['username'] = alltable.get(id = i+1).username
                    break
        if 'logged' not in request.session:
            context['invalid'] = True
        else:
            context['redirect'] = True
    return render(request,'signin.html',context)
def signup(request):
    alltable = person.objects
    context = {
        'countofusers':len(alltable.all()),
    }
    if 'logged' in request.session:
        context['logged'] = True
        context['redirect'] = True
    else:
        context['logged'] = False
    if 'check' in request.POST:
        username = request.POST.get("username")
        password = request.POST.get("password")
        name = request.POST.get("name")
        for i in range(0,len(alltable.all())):
            if alltable.get(id = i+1).username == username:
                context['invalid'] = True
                return render(request,'signup.html',context)
        alltable.create(name = name, password = password,username = username)
        request.session['logged'] = 'yes'
        request.session['username'] = username
        context['redirect'] = True
    return render(request,'signup.html',context)
def logout(request):
    del request.session['logged']
    return render(request,'logout.html',{})
