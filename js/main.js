// ============================================
// AI Native 英语学习教练 | 官网脚本
// ============================================

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
  }

  // Close mobile nav when clicking a link
  var navAnchors = links ? links.querySelectorAll('a') : [];
  for (var i = 0; i < navAnchors.length; i++) {
    navAnchors[i].addEventListener('click', function() {
      if (links) links.classList.remove('open');
    });
  }
});

// Modal management
function openModal() {
  var modal = document.getElementById('waitlistModal');
  if (modal) modal.classList.add('active');
}

function closeModal() {
  var modal = document.getElementById('waitlistModal');
  if (modal) modal.classList.remove('active');
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('waitlistModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Waitlist form submission
function submitWaitlist(event) {
  event.preventDefault();
  var form = event.target;
  var inputs = form.querySelectorAll('input, textarea');
  var name = inputs[0].value.trim();
  var contact = inputs[1].value.trim();
  var reason = inputs[2].value.trim();

  // Simple localstorage-based waitlist (MVP — later replace with backend)
  var waitlist = [];
  try {
    var stored = localStorage.getItem('ai_coach_waitlist');
    if (stored) waitlist = JSON.parse(stored);
  } catch(e) {}

  waitlist.push({
    name: name,
    contact: contact,
    reason: reason,
    time: new Date().toISOString()
  });

  try {
    localStorage.setItem('ai_coach_waitlist', JSON.stringify(waitlist));
  } catch(e) {}

  // Show success
  form.innerHTML = '<div style="text-align:center;padding:20px 0;">' +
    '<div style="font-size:2rem;margin-bottom:12px;">🎉</div>' +
    '<h4 style="margin-bottom:8px;">已加入等待名单！</h4>' +
    '<p style="color:var(--color-text-muted);font-size:0.9rem;">正式开放时按排队顺序邀请。在此之前，可以先去 GitHub 跟着免费方案开始学。</p>' +
    '<button class="btn btn-primary" style="margin-top:16px;" onclick="closeModal()">好的 →</button>' +
    '</div>';

  // Close modal after 3 seconds
  setTimeout(function() {
    closeModal();
    // Reset form for next open
    setTimeout(function() {
      form.innerHTML = '' +
        '<input type="text" placeholder="怎么称呼你？" required>' +
        '<input type="email" placeholder="你的邮箱或微信" required>' +
        '<textarea placeholder="说两句：为什么想学英语？（选填）"></textarea>' +
        '<button type="submit" class="btn btn-primary">提交 →</button>' +
        '<button type="button" class="btn btn-ghost" style="width:100%;" onclick="closeModal()">先看看再说</button>';
    }, 500);
  }, 3000);
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});

// Highlight current page in nav
document.addEventListener('DOMContentLoaded', function() {
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-links a');
  for (var i = 0; i < navLinks.length; i++) {
    var href = navLinks[i].getAttribute('href');
    if (href === currentPath) {
      navLinks[i].classList.add('active');
    } else {
      navLinks[i].classList.remove('active');
    }
  }
});
